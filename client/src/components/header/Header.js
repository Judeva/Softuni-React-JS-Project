import { Component } from 'react'
import Nav from '../navigation/Nav'
import './Header.css'

class Header extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
         <header className="app-header">
             {/* <img id='logo' src='https://svgshare.com/i/V59.svg' alt="logo"/> */}
             
             <Nav/>
         </header>
        )
    }

}

export default Header;