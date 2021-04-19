import './Sort.css'

const Sort = ({

}) => {

    return (
        <div className='dropdown'>
            <label htmlFor='sort'>Sort by:</label>
            <select name="sort">
                <option value="likes">Top rated</option>
                <option value="newest">Newest</option>
            </select>
        </div>
    );
}

export default Sort;