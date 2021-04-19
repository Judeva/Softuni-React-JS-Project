import { Component } from 'react';
import CollectionContext from '../../contexts/CollectionContext';
import './Home.css';
import Nomination from '../nomination/Nomination';
import * as nominationsService from '../../services/nominationsService';
import Search from '../search/Search';


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
                this.setState({ images: res })
            })
            .catch(err => console.log(err));
    }

    search = (filter) => {
        this.setState({images: filter});
    }

    render() {
        return (
            <CollectionContext.Provider value={{ ...this.state, search: this.search }}>
                <div className='home-container'>
                    <h4 className="display-2">SPACE CAT PHOTOS</h4>
                    <Search />
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