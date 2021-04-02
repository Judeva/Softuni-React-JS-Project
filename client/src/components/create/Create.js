import { useState } from "react";
import "./Create.css"

const Create = () => {


    const [fileInputState, setFileInputState] = useState('');
    const [selectedFile, setSelectedFile] = useState('');

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
    }


    return (
        <div className='create'>
            <h2 className="createTitle">ДОБАВИ ПРЕДЛОЖЕНИЕ</h2>
            
            <form>
                <input
                    type="file"
                    name="image"
                    onChange={handleFileInputChange}
                    value={fileInputState}
                    className="form-input" />
            </form>
            <lable>Max 1 Mb. JPEG/PNG; 1280х720 </lable>
            <div>
                <button className="btn" type="button">Качи</button>
            </div>


        </div>
    );
}

export default Create;