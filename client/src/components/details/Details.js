import { useEffect, useState, useContext } from 'react';
import { ToastContainer, toast } from "react-toastify";
import AuthContext from '../../contexts/AuthContext';
import * as nominationsService from '../../services/nominationsService';
import './Details.css';


const Details = ({
    match
}) => {
    let [nomination, setNomination] = useState({});
    let [likes, setLikes] = useState([]);
    const user = useContext(AuthContext);

    useEffect(() => {
        nominationsService.getOne(match.params._id)
            .then(res => {
                console.log(res)
                setNomination(res)
                setLikes(res.likes)
            });
    }, [match.params._id]);

    const onLikeButtonClickHandler = () => {

        let currentLikes = likes;

        if (!currentLikes.includes(user.user)) {
            currentLikes.push(user.user);
            nominationsService.like(match.params._id, currentLikes)
                .then((updatedNomination) => {
                    setNomination(state => ({ ...state, likes: Number(updatedNomination.likes) }))
                }).catch(err => {
                    console.log(err);
                })
        } else (
            toast.warning('You liked this already!')
        )
    };

    return (
        <section className="details">
            <ToastContainer></ToastContainer>
            <h3>{nomination.title}</h3>
            <p className="img"><img src={nomination.imageUrl} alt='uploaded' /></p>
            <div className="nomination-info">
                <p className="description">Description: {nomination.description}</p>
                <p className="creator">Creator: {nomination.creator}</p>
                <p className="created">Created: {nomination.created}</p>
                <p>Likes: {likes?.length}</p>
                {user.user && <button
                    className="button-like"
                    onClick={onLikeButtonClickHandler} >LIKE
                </button>}
            </div>
        </section>
    );
};

export default Details;