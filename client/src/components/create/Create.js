import { useState } from "react";
import { storage } from '../../firebase/firebase'
import "./Create.css"

const Create = () => {

    const [input, setInput] = useState({
        title: '',
        description: '',
    })

    const allInputs = { imgUrl: '' }
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)

    console.log(imageAsFile);

    const handleImageAsFile = e => {
        const image = e.target.files[0]
        setImageAsFile(imageFile => (image))
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
                    setImageAsFile(null);
                    setImageAsUrl(prevObject => ({ ...prevObject, imgUrl: fireBaseUrl }));
                })
        })
    }

    const handleChange = e => {
        const { name, value } =e.target;
        setInput(prevInput=>{
            return {
                ...prevInput,
                [name]:value,
            }
        })
    }

    return (
        <div className='create'>
            <h2 className="createTitle">ДОБАВИ ПРЕДЛОЖЕНИЕ</h2>
            <img className='preview-image'
                src={imageAsUrl.imgUrl || 'https://lh3.googleusercontent.com/proxy/6vvm8GJP9j8OWkCDz6SnmmQAIgLBD9eZrG-u0PuWQc3Dbxq9NFSk1Z2-HoU6uSP5Yo11OOa5_fCUZ6MSCMU7RX0yuhpOhKgdpG8j0N7W5fZxTVeYkWY'}
                alt="image tag" />
            <form onSubmit={handleFireBaseUpload} >
                <input
                    onChange={handleChange}
                    value={input.title}
                    type="text"
                    name="title-nomination"
                    placeholder="Заглавие..."
                />
                <textarea
                    onChange={handleChange}
                    value={input.description}
                    type="text"
                    name="description"
                    placeholder="Описание..."
                ></textarea>

                <input
                    onChange={handleChange}
                    type="file"
                    name="image"
                    onChange={handleImageAsFile}
                    className="form-input"
                />
                <div>
                    <button className="btn">ДОБАВИ</button>
                </div>
            </form>



        </div>
    );
}

export default Create;