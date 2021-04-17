import api from './api';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


export const validateAuthInput = (username, password, rePassword) => {
   
    if (!username) {
        return toast.error('Please, fill in username')
    }
    if (!password) {
        return toast.error('Please, fill in password.')
    }
}