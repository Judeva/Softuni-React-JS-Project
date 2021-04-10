import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nomination.css'

const Nomination = ({
    doc
}) => {

    console.log(doc);
    return (
        <div className="card">
            <img src={doc.imageUrl} className="card-img-top" alt="photo"></img>
            <div className="card-body">
                <h5 className="card-title">{doc.title}</h5>
                <p className="card-text">{doc.description}</p>
            </div>
            <Link to="/" className="btn btn-primary">Don't press</Link>
        </div>
    )

}

export default Nomination;