import { Link } from 'react-router-dom'
import './Profile.css';
import { useContext, useState, useEffect } from 'react';
import AuthContext from '../../contexts/AuthContext';
import axios from 'axios'
import ProfileCard from './profileCrad/ProfileCard';

const Profile = ({ }) => {

    const user = useContext(AuthContext);
    const [nominations, setNominations] = useState(null);

    useEffect(() => {
        let collection = [];
        axios.get('/nominations')
            .then(res => {
                res.data.forEach(element => {
                    if (element.creator == user.user) {
                        collection.push(element);
                    }
                });
                return collection;
            })
            .then(collection => {
                setNominations(collection)
            })
            .catch(err => { console.log(err) });
    }, [nominations]);

    const handleDeleteButtonClick = (id) => {
        axios.delete(`/nominations/${id}`)
            .then(res => { 
                console.log(res) })
            .catch(err => { console.log(err) })
    }


    return (
        <div className='profile'>
            <h4 className="display-2">My Profile</h4>
            <h4 className="display-6">USER INFO</h4>
            <ProfileCard uploads={nominations?.length} />
            <h4 className="display-6">MY FILES</h4>
            <ul className ='home-ul'>
                {nominations && nominations.map(doc => (
                    <li className='nomination-li' key={doc._id}
                    ><p>{doc.title}</p>
                        <img className='nomination-img' src={doc.imageUrl} alt='uploaded image' />
                        <button
                            onClick={() => handleDeleteButtonClick(doc._id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <Link to="/create" className="btn-go-home">UPLOAD PICTURE</Link>
        </div>

    );
}

export default Profile;