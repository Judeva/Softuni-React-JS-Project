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
            <Nav/>
         </header>
        )
    }

}

export default Header;