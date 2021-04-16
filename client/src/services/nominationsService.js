import api from './api';
import {toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';

export const getAll = () => {
    return fetch(api.nominations)
        .then(res => res.json())
        .catch(err => console.log('Handled error:' + err));
};

export const updateOneById=(id)=>{
    axios.patch('/nominations')
    .then(res=>{
        console.log(res.data)
    }).catch(err=>{
        console.log(err);
    })
}

export const validateInput = (input) => {
    const { title, description, imageUrl } = input;

    if (!title) {
        return toast.error('Please, fill in the Title field.')
    }
    if (!description) {
        return toast.error('Please, fill in the Description field.')
    }
    if (!imageUrl) {
        return toast.error('Please, select an image file.')
    }

}