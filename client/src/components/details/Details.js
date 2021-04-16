import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as nominationsService from '../../services/nominationsService'
import './Details.css'
const Details = ({
    match
}) => {
    let [nomination, setNomination] = useState({});
    let [likes, setLikes] = useState();

    console.log(match.params._id)
    useEffect(() => {
        nominationsService.getOne(match.params._id)
            .then(res => {
                console.log(res)
                setNomination(res)
                setLikes(res.likes.length)
            });
    }, []);

    // const onPetButtonClickHandler = () => {
    //     let incrementedLikes = nomination.likes + 1;

    //     nominationsService.like(match.params._id, incrementedLikes)
    //         .then((updatedNomination) => {
    //             setNomination(state => ({ ...state, likes: Number(updatedNomination.likes) }))
    //         });
    // };


    return (
        <section className="details">
            <h3>{nomination.title}</h3>
            <p className="img"><img src={nomination.imageUrl} /></p>
            <div className="nomination-info">
                <p className="description">Description: {nomination.description}</p>
                <p className="creator">Creator: {nomination.creator}</p>
                <p className="created">Created: {nomination.created}</p>
                <p>Likes: {likes}</p>
                <button className="button-like" >LIKE
                </button>
            </div>
        </section>
    );
};

export default Details;