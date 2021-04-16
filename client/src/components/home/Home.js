import { Component } from 'react'
import axios from 'axios';
import './Home.css'
import Nomination from '../nomination/Nomination';
import { Link } from 'react-router-dom';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [],
            selectedImage: null,
            currentImage: {}
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
            <div className='home-container'>
                <h4 className="display-2">SPACE CAT PHOTOS</h4>
                <ul>
                    {this.state.images.map(x => (
                        <Nomination
                            key={x._id}
                            {...x}
                        >
                                
                        </Nomination>
                    ))}
                </ul>
            </div>
        )
    }
}
export default Home;