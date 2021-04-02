import { useState } from "react";
import './Login.css';

const Login =()=>{

    const[username, setUsername] = useState();
    const[password, setPassword] = useState();

    console.log(process.env.NODE_ENV);
    console.log(process.env.PORT);
    
    return(
        <div className='login2'>
            <h2 className="loginTitle">LOGIN</h2>
            <form>
                <label 
                htmlFor="Username"           
                >Username</label>
                <input
                type='email'
                required
                value= {username}
                onChange = {(e)=>setUsername(e.target.value)}
                />
                <label htmlFor="Password">Password</label>
                <input
                type="password"
                required
                value= {password}
                onChange = {(e)=>setPassword(e.target.value)}
                />
                <input
                type="submit"
                id="login-submit-button"
                />
               <p>{password}</p>
            </form>
        </div>
    );
}

export default Login;