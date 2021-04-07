import { Component } from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

class Nav extends Component {

    render() {
        return (
            <div className="nav">
                <NavLink to="/" className="nav-link">НАЧАЛО</NavLink>
                <NavLink to="/about" className="nav-link">ОТНОСНО</NavLink>          
                <NavLink to="/login" className="nav-link">ВХОД</NavLink>
                <NavLink to="/logout" className="nav-link">ИЗХОД</NavLink>
                <NavLink to="/register" className="nav-link">РЕГИСТРАЦИЯ</NavLink>
                <NavLink to="/profile" className="nav-link">ПРОФИЛ</NavLink>
            </div>
        )
    }

}

export default Nav;