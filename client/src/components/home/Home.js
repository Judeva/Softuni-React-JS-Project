import { Component } from 'react';
import CollectionContext from '../../contexts/CollectionContext';
import * as nominationsService from '../../services/nominationsService';
import Nomination from '../nomination/Nomination';
import Search from '../search/Search';
import Sort from '../sort/Sort';
import './Home.css';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [],
            sorting: '',
        }
    }

    componentDidMount() {
        nominationsService.getAll()
            .then(res => {
                this.setState({ images: res })
            })
            .catch(err => console.log(err));
    }

    search = (filter) => {
        this.setState({ images: filter });
    }

    handleSortClick = (sorting) => {
        console.log(sorting)
        if (sorting === 'topRated') {
            console.log(this.state.images)
            this.setState({ images: this.state.images.sort((a, b) => a.likes.length - b.likes.length).reverse()});

        } else if (sorting === 'newest') {
            this.setState({ images: this.state.images.reverse()});
        }
    }

render() {
    return (
        <CollectionContext.Provider value={{ ...this.state, search: this.search, sort: this.handleSortClick} }>
            <div className='home-container'>
                <h4 className="display-2">SPACE CAT PHOTOS</h4>
                <Search/><Sort/>
                <ul className='home-ul'>
                    {this.state.images.map(x => (
                        <Nomination
                            key={x._id}{...x}
                        />
                    ))}
                </ul>
            </div>
        </CollectionContext.Provider>
    )
}
}
export default Home;