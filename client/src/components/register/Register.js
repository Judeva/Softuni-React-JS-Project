import { useState } from "react";
import {auth} from '../../firebase/firebase'
import './Register.css';

const Register = ({
    history
}) => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [rePassword, setRePassword] = useState();

    const onRegisterSubmitHandler =(e)=>{

        e.preventDefault();

        if(password!==rePassword){
            return alert('Passwords should match');
        }
                
        auth.createUserWithEmailAndPassword(username, password)
        .then(userCredentials=>{
            history.push('/');
        }).catch(err=>{
            console.log(err);
        })
    }

    return (


        <div className="bg-purple">
            <div className="stars">
                <div className="central-body">
                <div className='register'>
                    <h2 className="display-2">REGISTER</h2>
                    <form onSubmit={onRegisterSubmitHandler}>
                        <label
                            htmlFor="Username"
                        >E-mail</label>
                        <input
                            name="username"
                            type='email'
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label htmlFor="Password">Password</label>
                        <input
                            name="password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="Password">Repeat Password</label>
                        <input
                            name='rePassword'
                            type="password"
                            required
                            value={rePassword}
                            onChange={(e) => setRePassword(e.target.value)}
                        />
                        <input
                            type="submit"
                            id="login-submit-button"
                        />
                    </form>
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

export default Register;