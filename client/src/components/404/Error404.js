import './Error404.css'
import { Link } from 'react-router-dom'

const Error404 = () => {

    return (
        <div className='container-404'>
            <img className="image-404" src="http://salehriaz.com/404Page/img/404.svg" width="300px" alt='404' />
            <Link to="/" className="btn-go-home">RETURN HOME</Link>
        </div>
    )
}

export default Error404;