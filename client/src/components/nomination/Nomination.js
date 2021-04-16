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
    _id
}) => {


    return (

        <li className='nomination-li'>
            <p>{title}</p>
            <img className='nomination-img'
                src={imageUrl}
                alt="photo"
            ></img>
            <Link to={`/nominations/${_id}}`}><button className="button">Details</button></Link>
        </li>

    );

}

export default Nomination;