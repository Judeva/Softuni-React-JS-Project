import { Link } from 'react-router-dom'
import './Profile.css';
import { useContext, useState, useEffect } from 'react';
import AuthContext from '../../contexts/AuthContext';
import axios from 'axios'
import ProfileCard from './profileCrad/ProfileCard';

const Profile = ({}) => {

    const user = useContext(AuthContext);
    const [nominations, setNominations] = useState(null);

    useEffect(() => {
        let collection = [];
        axios.get('/nominations')
            .then(res => {
                res.data.forEach(element => {
                    if (element.creator ==user.user) {
                        collection.push(element);
                    }
                });
                return collection;
            })
            .then(collection => {
                setNominations(collection)
            })
            .catch(err => { console.log(err) });
    }, []);


    return (
        <div className='profile'>
            <h4 className="display-2">My Profile</h4>
            
            <h4 className="display-6">USER INFO</h4>
           <ProfileCard/>
            <h4 className="display-6">MY FILES</h4>

            <div className="img-grid">
                {nominations?.map(doc => (
                    <div className='img-wrap' key={doc._id}
                    ><h5>{doc.title}</h5>
                        <img src={doc.imageUrl} alt='uploaded image' />
                    </div>
                ))}
            </div>
            <Link to="/create" className="btn-go-home">UPLOAD PICTURE</Link>
        </div>

    );
}

export default Profile;