import { useState, useContext } from 'react';
import './Modal.css'

const Modal = ({
    selectedImage,
    setSelectedImage,
    imageData,
}) => {

    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedImage();
        }
    }

    const handleLikeButtonClick =()=>{
        
    }

    return (
        <div className='backdrop' onClick={handleClick}>
            <img src={selectedImage} alt='enlarged image' />
            
            <p>Description: {imageData.description} &copy; Creator: {imageData.creator}</p>
            <p>Uploaded at : {imageData.created}    Likes: {imageData.likes}</p>
            <p><button 
            type="button" 
            className="btn-like"
            onClick={handleLikeButtonClick}>Like</button>  </p>
           
            
             
        </div>

    );
}

export default Modal;