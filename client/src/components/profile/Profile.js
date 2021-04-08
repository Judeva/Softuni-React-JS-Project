import { useState } from "react";
import{Link} from 'react-router-dom'
import './Profile.css';

const Profile = ({
    loggedIn
}) => {



    return (
        <div className='profile'>
            <h2 className="profileTitle">МОЯТ ПРОФИЛ</h2>

            <div className="row">
                <div className="column">
                    <h4>ДАННИ ЗА ПОТРЕБИТЕЛЯ</h4>
                    <h5>STATUS: {loggedIn}</h5>
                </div>
                <div className="column">
                <h4>ГАЛЕРИЯ НА ПОТРЕБИТЕЛЯ</h4>
                </div>

                <Link to="/create" className="nav-link">ДОБАВИ ПРЕДЛОЖЕНИЕ</Link>
            </div>

        </div>
    );
}

export default Profile;