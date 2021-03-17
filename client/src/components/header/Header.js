import { Component } from 'react'
import Nav from '../Nav'
import './Header.css'

class Header extends Component {

    render() {
        return (
         <header className="app-header">
             <img id='logo' src='https://svgshare.com/i/V59.svg' alt="logo"/>
             <Nav/>
         </header>
        )
    }

}

export default Header;