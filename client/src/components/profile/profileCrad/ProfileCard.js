import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../contexts/AuthContext';
import './ProfileCard.css' 

const ProfileCard = ({
    uploads
}) => {

    const user = useContext(AuthContext); 

    return (

        <div className="card">
            
            <img src='https://firebasestorage.googleapis.com/v0/b/cat-chasing-tail.appspot.com/o/avatar.png?alt=media&token=6668e252-a575-42f5-bb7d-90f26e40f0db'/>
            <h2>{user.user}</h2>
            <p className="title">Photographer</p>
            <h4 className="display-8">Uploaded photos: {uploads} </h4>
            <Link to='http://twitter.com'><i className="fa fa-twitter"></i></Link>
            <Link to='http://linkedin.com'><i className="fa fa-linkedin"></i></Link>
            <Link to='http://facebook.com'><i className="fa fa-facebook"></i></Link>
           
        </div>
    );
}

export default ProfileCard;