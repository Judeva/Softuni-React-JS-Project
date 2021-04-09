import { useState } from "react";
import { auth } from '../../firebase/firebase'
import './Register.css';

const Register = ({
    history
}) => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [rePassword, setRePassword] = useState();

    const onRegisterSubmitHandler = (e) => {

        e.preventDefault();

        if (password !== rePassword) {
            return alert('Passwords should match');
        }

        auth.createUserWithEmailAndPassword(username, password)
            .then(userCredentials => {
                history.push('/');
            }).catch(err => {
                console.log(err);
            })
    }

    return (
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
    );
}

export default Register;