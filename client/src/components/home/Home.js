import { Component } from 'react'
import axios from 'axios';
import './Home.css'
import Nomination from '../nomination/Nomination';
import * as nominationsService from '../../services/nominationsService'


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [],
        }
    }

    componentDidMount() {

        nominationsService.getAll()
            .then(res => {
                console.log(res)
                this.setState({ images: res })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className='home-container'>
                <h4 className="display-2">SPACE CAT PHOTOS</h4>
                <ul className='home-ul'>
                    {this.state.images.map(x => (
                        <Nomination
                            key={x._id}{...x}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}
export default Home;