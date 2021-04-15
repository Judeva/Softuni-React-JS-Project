import { Component } from 'react'
import axios from 'axios';
import './Home.css'
import Modal from '../modal/Modal';

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
            <div>
                <h4 className="display-2">SPACE CAT PHOTOS</h4>
                <div className="img-grid">
                    {this.state.images.map(doc => (
                        <div
                            className='img-wrap'
                            key={doc._id}
                            onClick={() => this.setState({ selectedImage: doc.imageUrl, currentImage: { ...doc } })}
                        ><h5>{doc.title}</h5>
                            <img src={doc.imageUrl} alt='uploaded image' />
                        </div>

                    ))}
                    {this.state.selectedImage && <Modal
                        selectedImage={this.state.selectedImage}
                        setSelectedImage={() => this.setState({ selectedImage: null })}
                        imageData={this.state.currentImage} />}

                </div>
            </div>
        )
    }
}
export default Home;