import { useState } from "react";
import './Login.css';

const Login = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    console.log(process.env.NODE_ENV);
    console.log(process.env.PORT);

    return (

        <div className='home'>
            <div className="bg-purple">
                <div className='login2'>
                    <h2 className="display-2">LOGIN</h2>
                    <form>
                        <label
                            htmlFor="Username"
                        >Email</label>
                        <input
                            type='email'
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label htmlFor="Password">Парола</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="submit"
                            id="login-submit-button"
                        />

                    </form>
                </div>
            </div>
            <div className="stars">
                <div className="central-body">
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

export default Login;