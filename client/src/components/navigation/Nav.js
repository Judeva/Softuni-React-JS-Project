import { Component } from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

class Nav extends Component {

    render() {
        return (
            <div className="nav">
                <NavLink to="/" className="nav-link">HOME</NavLink>
                <NavLink to="/about" className="nav-link">ABOUT</NavLink>
                <NavLink to="/register" className="nav-link">REGISTER</NavLink>
                <NavLink to="/login" className="nav-link">LOGIN</NavLink>
                <NavLink to="/profile" className="nav-link">PROFILE</NavLink>
                <NavLink to="/logout" className="nav-link">LOGOUT</NavLink>
            </div>
        )
    }

}

export default Nav;