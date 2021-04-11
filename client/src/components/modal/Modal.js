import { useState, useContext } from 'react';

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
            <p>Description: {imageData.description} &copy; Creator: {imageData.creator}</p>
            <p>Uploaded at: {imageData.created} Likes: {imageData.likes}</p>
            <p>Likes: {imageData.likes}</p>

        </div>


    );
}

export default Modal;