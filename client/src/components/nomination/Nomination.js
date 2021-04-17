import { useState } from 'react';
import './Nomination.css'
import { Link } from 'react-router-dom'

const Nomination = ({
    imageUrl,
    title,
    description,
    creator,
    created,
    likes,
    _id,
    props
}) => {

console.log(likes)
    return (
        <li className='nomination-li'>
            <h6 className='title-paragraph'>{title}</h6>
            <img className='nomination-img'
                src={imageUrl}
                alt="photo"            
            ></img>
            <Link to={`/nominations/${_id}`}> <button className="button">See more...</button></Link>
        </li>
    );
}

export default Nomination;