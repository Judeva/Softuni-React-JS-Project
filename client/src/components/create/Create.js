import { useState } from "react";
import { storage } from '../../firebase/firebase'
import "./Create.css"

const Create = () => {

    const allInputs = { imgUrl: '' }
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)

    console.log(imageAsFile);

    const handleImageAsFile = (e) => {
        const image = e.target.files[0]
        setImageAsFile(imageFile => (image))
    }


    const handleFireBaseUpload = e => {
        e.preventDefault()
        console.log('start of upload')

        if (imageAsFile === '') {
            console.error(`not an image, the image file is a ${typeof (imageAsFile)}`)
        }
        const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
        //upload 
        uploadTask.on('state_changed',
            (snapShot) => {
                //snapshot
                console.log(snapShot)
            }, (err) => {
                console.log(err)
            }, () => {
                storage.ref('images').child(imageAsFile.name).getDownloadURL()
                    .then(fireBaseUrl => {
                        setImageAsUrl(prevObject => ({ ...prevObject, imgUrl: fireBaseUrl }))
                    })
            })
    }


    return (
        <div className='create'>
            <h2 className="createTitle">ДОБАВИ ПРЕДЛОЖЕНИЕ</h2>

            <form onSubmit={handleFireBaseUpload} >
                <input
                    type="file"
                    name="image"
                    onChange={handleImageAsFile}
                    className="form-input" />
                <lable>Max 1 Mb. JPEG/PNG; 1024х1024 </lable>
                <div>
                    <button className="btn">Качи</button>
                </div>
            </form>

            <img src={imageAsUrl.imgUrl} alt="image tag" />

        </div>
    );
}

export default Create;