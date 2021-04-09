import { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import './Home.css'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nominations: []
        }
    }

    componentDidMount() {
        axios.get('/nominations')
            .then(res => {
                this.setState({ nominations: res })
                console.log(res.data);   
            })               
            .catch(err => { console.log(err) });
    }

    render() {
        return (
            <div>
                
            </div>

        )
    }
}

export default Home;