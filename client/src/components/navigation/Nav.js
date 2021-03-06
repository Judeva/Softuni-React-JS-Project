import { Component } from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'
import './Nav.css';

class Nav extends Component {

    render() {
        return (

            <div className="nav">
                <NavLink to="/" className="nav-link">HOME</NavLink>
                <NavLink to="/about" className="nav-link">ABOUT</NavLink>
                {!this.context.user && <NavLink to="/register" className="nav-link">REGISTER</NavLink>}
                {!this.context.user && <NavLink to="/login" className="nav-link">LOGIN</NavLink>}
                {this.context.user && <NavLink to="/profile" className="nav-link">PROFILE</NavLink>}
                {this.context.user && <NavLink to="/logout" className="nav-link">LOGOUT</NavLink>}
            </div>

        )
    }
}

Nav.contextType = AuthContext;
export default Nav;