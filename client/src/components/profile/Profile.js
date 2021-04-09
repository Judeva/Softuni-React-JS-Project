import { useState } from "react";
import { Link } from 'react-router-dom'
import './Profile.css';

const Profile = ({
    loggedIn
}) => {

    return (

        <div className="bg-purple">
            <div className="stars">
                <div className="central-body">
                    <div className='profile'>
                        <h4 className="display-2">My Profile</h4>
                        <h4 className="display-6">USER INFO</h4>
                        <h5>STATUS: {loggedIn}</h5>
                        <h4 className="display-6">MY FILES</h4>
                        <Link to="/create" className="btn-go-home">UPLOAD PICTURE</Link>
                    </div>
                    <div className="objects">
                        <img className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px" />
                        <div className="earth-moon">
                            <img className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px" />
                            <img className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px" />
                        </div>
                        <div className="box_astronaut">
                            <img className="object_astronaut" src="https://firebasestorage.googleapis.com/v0/b/cat-chasing-tail.appspot.com/o/cat-space-01.svg?alt=media&token=b08f7866-6c14-4c1c-83f2-6043746ea5ff" width="140px" />
                        </div>
                    </div>
                    <div className="glowing_stars">
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;