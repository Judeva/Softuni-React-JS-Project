import { useState } from "react";
import { storage } from '../../firebase/firebase'
import "./Create.css"


const Create = () => {


    const allInputs = { imgUrl: '' }
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)


    const handleImageAsFile = e => {
        const image = e.target.files[0];
        setImageAsFile(image)
        console.log(image);
    }

    const handleFireBaseUpload = e => {
        e.preventDefault()
        console.log('start of upload')

        if (imageAsFile === '') {
            console.error(`not an image, the image file is a ${typeof (imageAsFile)}`);
        }

        const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)

        uploadTask.on("state_changed", console.log, console.error, () => {
            storage
                .ref('images')
                .child(imageAsFile.name)
                .getDownloadURL()
                .then((fireBaseUrl) => {
                    // setImageAsFile(null);
                    setImageAsUrl(prevObject => ({ ...prevObject, imgUrl: fireBaseUrl }));
                })
        })
    }

    const handleCreateNomination = e => {
        e.preventDefault()
        console.log(imageAsFile);
    }


    return (
        <div className='create'>
            <h2 className="createTitle">ДОБАВИ ПРЕДЛОЖЕНИЕ</h2>
            <img className='preview-image'
                src={imageAsUrl.imgUrl || 'https://firebasestorage.googleapis.com/v0/b/cat-chasing-tail.appspot.com/o/Preview-icon-01.png?alt=media&token=0dde4699-34ef-43a0-9178-366dbba6d68b'}
                alt="image tag" />

            <input
                type="file"
                onChange={handleImageAsFile}
            />
            <div>
                <button
                    onClick={handleFireBaseUpload}
                    className="btn">ПРИКАЧИ СНИМКА</button>
            </div>
            <form onSubmit={handleCreateNomination} >
                <input
                    type="text"
                    name="title-nomination"
                    placeholder="Заглавие..."
                />
                <textarea
                    type="text"
                    name="description"
                    placeholder="Описание..."
                >
                </textarea>
                <p>{imageAsUrl.imgUrl||'Download link goes here.'}</p>
                <div>
                    <button className="btn">ДОБАВИ ПРЕДЛОЖЕНИЕ</button>
                </div>
            </form>




        </div>
    );
}

export default Create;

