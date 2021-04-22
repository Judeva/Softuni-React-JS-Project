import './Nomination.css'
import { Link } from 'react-router-dom'

const Nomination = ({
    imageUrl,
    title,
    _id,
}) => {

    return (
        <li className='nomination-li'>
            <h6 className='title-paragraph'>{title}</h6>
            <img className='nomination-img'
                src={imageUrl}
                alt="alt"            
            ></img>
            <Link to={`/nominations/${_id}`}> <button className="button">See more...</button></Link>
        </li>
    );
}

export default Nomination;