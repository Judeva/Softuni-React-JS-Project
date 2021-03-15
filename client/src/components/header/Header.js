import { Component } from 'react'
import Nav from '../Nav'



class Header extends Component {

    render() {
        return (
         <div className="div-header">
             <img id='logo' src="https://www.grundfos.com/content/dam/systems/topbar/global/grundfos-logo.png" alt="logo"/>
             <Nav/>
             
         </div>
        )
    }

}

export default Header;