import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nomination.css'

const Nomination = ({
    doc
}) => {

    return (
        <div className="img-wrap">
            <img src={doc.imageUrl} alt="photo"></img>
            <Link to="/" className="btn btn-primary">Don't press</Link>
        </div>
    );

}

export default Nomination;