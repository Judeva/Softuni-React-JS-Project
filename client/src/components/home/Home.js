import { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import './Home.css'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nominations:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/nominations')
        .then(res=>{
            
            console.log(res);
        })

    }

    render() {
        return (
            <div></div>

        )
    }
}

export default Home;