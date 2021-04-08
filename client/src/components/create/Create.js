import { useState } from "react";
import { storage } from '../../firebase/firebase';
import axios from 'axios';
import "./Create.css";


const Create = () => {


    const allInputs = { imgUrl: '' };
    const [imageAsFile, setImageAsFile] = useState('');
    const [imageAsUrl, setImageAsUrl] = useState(allInputs);

    const [input, setInput] = useState({
        title: '',
        description: '',
    });

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
            .then(res => { console.log(res) })
            .catch(err => { console.log(err) })

        // console.log(newNomination);
        // fetch('http://localhost:5000/create', {
        //     method: 'POST',
        //     header: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(newNomination)


        // }).then(res => {
        //     console.log(res);
        // }).catch(err => {
        //     console.log(err)
        // })
    }

    return (

        <div className="bg-purple">
            <div className='create'>
                <h4 className="display-6">ДОБАВИ ПРЕДЛОЖЕНИЕ</h4>
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
                        className="btn">ПРИКАЧИ СНИМКА</button>
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
                        <button className="btn">ДОБАВИ ПРЕДЛОЖЕНИЕ</button>
                    </div>
                </form>
            </div>
            <div className="stars">

                <div className="central-body">

                </div>
                <div className="objects">
                    <img className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px" />
                    <div className="earth-moon">
                        <img className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px" />
                        <img className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px" />
                    </div>
                    <div className="box_astronaut">
                        <img className="object_astronaut" src="https://firebasestorage.googleapis.com/v0/b/cat-chasing-tail.appspot.com/o/cat-space-01.svg?alt=media&token=b08f7866-6c14-4c1c-83f2-6043746ea5ff" width="140px" />
                    </div>
                </div>
                <div className="glowing_stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>

                </div>

            </div>

        </div>

    );
}

export default Create;

