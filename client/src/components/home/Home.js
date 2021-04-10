import { Component } from 'react'
import axios from 'axios';
import Nomination from '../nomination/Nomination'
import './Home.css'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
    }

    componentDidMount() {

        let collection = [];
        axios.get('/nominations')
            .then(res => {
                res.data.forEach(element => {
                    collection.push(element);
                });
                return collection;
            })
            .then(collection => {
                console.log(collection)
                this.setState({ images: collection })
            })
            .catch(err => { console.log(err) });
    }

    render() {
        return (
            <div className="home-container">

                {this.state.images.map(doc => (
                    <Nomination key={doc._id} doc={doc}/>
                ))}

            </div>

        )
    }
}

export default Home;