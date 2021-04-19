import { Component } from 'react';
import CollectionContext from '../../contexts/CollectionContext';
import './Home.css';
import Nomination from '../nomination/Nomination';
import * as nominationsService from '../../services/nominationsService';
import Search from '../search/Search';
import Sort from '../sort/Sort';


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

    handleSortClick = () => {
        console.log(this.state.sorting)
        if (this.state.sorting == 'topRated') {
            console.log(this.state.images)
            this.setState({ images: this.state.images.sort((a, b) => a.likes.length - b.likes.length).reverse()});

        } else if (this.state.sorting == 'newest') {
            this.setState({ images: this.state.images.reverse()});
        }
    }


render() {
    return (
        <CollectionContext.Provider value={{ ...this.state, search: this.search }}>
            <div className='home-container'>
                <h4 className="display-2">SPACE CAT PHOTOS</h4>
                <Search />
                <div className='dropdown'>
                    <label htmlFor='sort'>Sort by:</label>
                    <select
                        value={this.state.sorting}
                        name="sort"
                        onChange={(e) => this.setState({ sorting: e.target.value })}
                        onClick={this.handleSortClick}
                        >
                        <option  value="newest">Newest</option>
                        <option  value="topRated">Top rated</option>
                    </select>
                </div>
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