import { useState } from "react";
import './Register.css';

const Register =()=>{

    const[username, setUsername] = useState();
    const[password, setPassword] = useState();
    
    return(
        <div className='register'>
            <h2 className="registerTitle">REGISTER</h2>
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
                <label htmlFor="Repeat Password">Repeat Password</label>
                <input
                type="password"
                required
                value= {password}
                onChange = {(e)=>setPassword(e.target.value)}
                />
                <input
                type="submit"
                id="register-submit-button"
                />
                
            </form>
        </div>
    );
}

export default Register;