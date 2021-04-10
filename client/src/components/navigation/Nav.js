import { Component } from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'

class Nav extends Component {

    render() {
        return (

            <div className="nav">
                {console.log(this.context.user)}
                <NavLink to="/" className="nav-link">HOME</NavLink>
                 <NavLink to="/about" className="nav-link">ABOUT</NavLink>
                {!this.context.user && <NavLink to="/register" className="nav-link">REGISTER</NavLink>}
                {!this.context.user && <NavLink to="/login" className="nav-link">LOGIN</NavLink>}
                {this.context.user &&<NavLink to="/profile" className="nav-link">PROFILE</NavLink>}
                {this.context.user &&<NavLink to="/logout" className="nav-link">LOGOUT</NavLink>}
            </div>

        )
    }
}

Nav.contextType = AuthContext;
export default Nav;