import { useState, useContext } from "react";
import { storage } from '../../firebase/firebase';
import { ToastContainer, toast } from "react-toastify";
import { validateInput } from '../../services/nominationsService';

import moment from 'moment';
import axios from 'axios';

import './Create.css';
import 'react-toastify/dist/ReactToastify.css';

import AuthContext from '../../contexts/AuthContext';
const Create = ({
    history
}) => {

    const user = useContext(AuthContext);
    const allInputs = { imgUrl: '' };
    const [imageAsFile, setImageAsFile] = useState('');
    const [imageAsUrl, setImageAsUrl] = useState(allInputs);
    const [input, setInput] = useState({
        title: '',
        description: '',
    });

    const types = ['image/png', 'image/jpeg'];

    const handleImageAsFile = e => {

        const image = e.target.files[0];
        console.log(image);

        if (image && types.includes(image.type)) {
            setImageAsFile(image)
            console.log(image.name);
        } else {
            setImageAsFile(null);
            toast.error('Selected file is not an image!');
        }

    }

    const handleFireBaseUpload = e => {
        e.preventDefault();

        if (imageAsFile && imageAsFile) {
            const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile);
            uploadTask.on("state_changed", console.log, console.error, () => {
                storage
                    .ref('images')
                    .child(imageAsFile.name)
                    .getDownloadURL()
                    .then((fireBaseUrl) => {
                        // setImageAsFile(null);
                        setImageAsUrl(prevObject => ({ ...prevObject, imgUrl: fireBaseUrl }));
                    }).catch(err => {
                        console.log(err);
                    })
            })
        } else {
            toast.error('You should upload photo first!')
        }
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

        const creationDate = moment(Date(imageAsFile?.lastModifiedDate)).format('lll');

        console.log(creationDate);
        const newNomination = {
            title: input.title,
            description: input.description,
            imageUrl: imageAsUrl.imgUrl,
            created: creationDate,
            creator: user.user,
            likes: []
        }

        validateInput(newNomination);

        axios.post('/create', newNomination)
            .then(res => {
                history.push('/');
            })
            .catch(err => {
                toast.error(err.message);
            });
    }

    return (
        <div className='create'>
            <h4 className="display-6">ADD PICTURE</h4>
            <ToastContainer />
            <img className='preview-image'
                src={imageAsUrl.imgUrl}
                alt=''
            />
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
                    placeholder="Title"
                    value={input.title}
                />
                <textarea
                    onChange={handleOnChange}
                    type="text"
                    name="description"
                    placeholder="  Description..."
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

