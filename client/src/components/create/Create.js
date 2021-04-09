import { useState } from "react";
import { storage } from '../../firebase/firebase';
import axios from 'axios';
import './Create.css';
import ErrorBox from "../error/ErrorBox";


const Create = ({
    history
}) => {

    const allInputs = { imgUrl: '' };
    const [imageAsFile, setImageAsFile] = useState('');
    const [imageAsUrl, setImageAsUrl] = useState(allInputs);
    const [error, setError] = useState(null);
    const [input, setInput] = useState({
        title: '',
        description: '',
    });

    const types =['image/png', 'image/jpeg'];

    const handleImageAsFile = e => {
        const image = e.target.files[0];

        if (image&&types.includes(image.type)) {
            setImageAsFile(image)
            console.log(image);
        }else{
            setImageAsFile(null);
            setError('Please select an image file (png or jpeg!)')
        }

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

    const handleOnChange = e => {
        const { name, value } = e.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    const handleCreateNomination = e => {
        e.preventDefault()

        console.log('hello from handleCreate')

        const newNomination = {
            title: input.title,
            description: input.description,
            imageUrl: imageAsUrl.imgUrl,
            created: String(imageAsFile.lastModifiedDate)
        }

        axios.post('/create', newNomination)
            .then(res => {
                history.push('/'); //TODO redirect to profile page;
                console.log(res)
            })
            .catch(err => { console.log(err) })
    }

    return (
        <div className='create'>
            <ErrorBox >{error}</ErrorBox>
            <h4 className="display-6">ADD PICTURE</h4>
            <img className='preview-image'
                src={imageAsUrl.imgUrl}
                alt="Preview here" />
            <input
                type="file"
                onChange={handleImageAsFile}
            />
            <div>
                <button
                    onClick={handleFireBaseUpload}
                    className="btn-go-home">UPLOAD PICTURE</button>
            </div>
            <form onSubmit={handleCreateNomination} >
                <input
                    onChange={handleOnChange}
                    type="text"
                    name="title"
                    placeholder="Заглавие..."
                    value={input.title}
                />
                <textarea
                    onChange={handleOnChange}
                    type="text"
                    name="description"
                    placeholder="Описание..."
                    value={input.description}
                >
                </textarea>
                <div>
                    <button className="btn-go-home">ADD SUBMITION</button>
                </div>
            </form>
            
        </div>
    );
}

export default Create;

