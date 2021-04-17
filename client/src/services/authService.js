import api from './api';
import {toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


export const validateAuthInput = (username, password, rePassword ) => {
    
    if (password !== rePassword) {
        return toast.error('Passwords should match!')
    }
    if (!username) {
        return toast.error('Please, fill in username')
    }
    if (!password) {
        return toast.error('Please, fill in password.')
    }
    if (!rePassword) {
        return toast.error('Please, repeat password.')
    }

}