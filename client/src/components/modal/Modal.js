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

    return (
        <div className='backdrop' onClick={handleClick}>
            <img src={selectedImage} alt='enlarged image' />
            <div className='container-modal'>
            <p>Description: {imageData.description} &copy; Creator: {imageData.creator}</p>
            <p>Uploaded at: {imageData.created}</p>
            <p>Likes: {imageData.likes}</p>
           
            </div>
             <button type="button" className="btn-like">Like</button>
        </div>

    );
}

export default Modal;