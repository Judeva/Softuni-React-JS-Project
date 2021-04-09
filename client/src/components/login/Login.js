import { useState } from "react";
import { auth } from '../../firebase/firebase'
import './Login.css';

const Login = ({
    history
}) => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const onLoginSubmitHandler = (e) => {

        e.preventDefault();

        auth.signInWithEmailAndPassword(username, password)
            .then(userCredentials => {
                history.push('/')
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='login2'>
            <h2 className="display-2">LOGIN</h2>
            <form onSubmit={onLoginSubmitHandler}>
                <label
                    htmlFor="Username"
                >Email</label>
                <input
                    name="username"
                    type='email'
                    placeholder="user@example.com"
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
                <input
                    type="submit"
                    id="login-submit-button"
                />
            </form>
        </div>
    );
}

export default Login;