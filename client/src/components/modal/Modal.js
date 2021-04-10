import React, { useState } from 'react';

const Modal = ({
    selectedImage,
    setSelectedImage
}) => {

    
const handleClick=(e)=>{
  
}

    return (
        <div>
        <div className='backdrop' onClick={setSelectedImage}>
            <img src={selectedImage} alt='enlarged image' />
        </div>
      
        </div>
    );
}

export default Modal;