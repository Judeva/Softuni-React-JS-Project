import './Sort.css'
import { useContext, useState } from 'react';
import CollectionContext from '../../contexts/CollectionContext';

const Sort = () => {

    const [sorting, setSorting] = useState();
    const { sort } = useContext(CollectionContext);

    return (
        <div className='dropdown'>
        <label htmlFor='sort'>Sort by:</label>
        <select
            name="sort"
            onChange={(e) => setSorting(e.target.value )}
            onClick={()=>sort(sorting)}
            >
            <option  value="newest">Newest</option>
            <option  value="topRated">Top rated</option>
        </select>
    </div>
    );
}

export default Sort;