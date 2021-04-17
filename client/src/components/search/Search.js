import './Search.css'
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import CollectionContext from '../../contexts/CollectionContext';
const Search = ({
    
}) => {

 
    const [searchInput, setSearchInput] = useState("");
   
    const onSearchClickHandler = (searchInput) => {
        setSearchInput("");
       toast.info('Comming soon :)')
    }

    return (
        <div className='search-div'>
            <ToastContainer/>
            <input
                type='text'
                placeholder='Search...'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)} />
            <img
                src='https://firebasestorage.googleapis.com/v0/b/cat-chasing-tail.appspot.com/o/search-icon.png?alt=media&token=f387d25e-d1a0-4f18-8948-379bcd0e6e42'
                onClick={(e)=>onSearchClickHandler(searchInput)} />
        </div>
    );
}

export default Search;