import './Search.css'
import { useContext, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import CollectionContext from '../../contexts/CollectionContext';
import * as nominationsService from '../../services/nominationsService';

const Search = ({
    history
}) => {

    const [searchInput, setSearchInput] = useState("");
    const {search} = useContext(CollectionContext);

    const onSearchClickHandler = (searchInput) => {

        let searchText = searchInput.toLowerCase();
        let images = [];
        
        nominationsService.getAll()
            .then(res => {
                res.filter(x =>
                    x.title.toLowerCase()
                        .includes(searchText) ||
                    x.description.toLowerCase()
                        .includes(searchText) ||
                    x.creator.toLowerCase()
                        .includes(searchText))
                        
            }).then(res=>search(res)).catch(err => console.log(err));

        setSearchInput('');
    }

    return (
        <div className='search-div'>
            <ToastContainer />
            <input
                type='text'
                placeholder='Search...'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)} />
            <img
                src='https://firebasestorage.googleapis.com/v0/b/cat-chasing-tail.appspot.com/o/search-icon.png?alt=media&token=f387d25e-d1a0-4f18-8948-379bcd0e6e42'
                onClick={(e) => onSearchClickHandler(searchInput)} />
        </div>
    );
}

export default Search;