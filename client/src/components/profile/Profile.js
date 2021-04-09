import { useState } from "react";
import { Link } from 'react-router-dom'
import './Profile.css';

const Profile = ({
    loggedIn
}) => {

    return (
        <div className='profile'>
            <h4 className="display-2">My Profile</h4>
            <h4 className="display-6">USER INFO</h4>
            <h4 className="display-6">MY FILES</h4>
            <Link to="/create" className="btn-go-home">UPLOAD PICTURE</Link>
        </div>

    );
}

export default Profile;