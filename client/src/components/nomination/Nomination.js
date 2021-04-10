import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nomination.css'

const Nomination = ({
    doc
}) => {

    return (
        <div className="img-wrap">
            <img src={doc.imageUrl} className="card-img-top" alt="photo"></img>
            <h5 className="card-title">{doc.title}</h5>
            <p className="card-text">{doc.description}</p>
            
            <Link to="/" className="btn btn-primary">Don't press</Link>
        </div>
    );

}

export default Nomination;