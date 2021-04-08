import { useState } from "react";
import { Link } from 'react-router-dom'
import './Profile.css';

const Profile = ({
    loggedIn
}) => {



    return (

        <div className="bg-purple">

            <div className="stars">
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
                <div className="central-body">
                    
                </div>
                <div className="objects">
                    <img className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px" />
                    <div className="earth-moon">
                        <img className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px" />
                        <img className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px" />
                    </div>
                    <div className="box_astronaut">
                        <img className="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px" />
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

    );
}

export default Profile;