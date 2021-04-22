import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


export const validateAuthInput = (username, password) => {
   
    if (!username) {
        return toast.error('Please, fill in username')
    }
    if (!password) {
        return toast.error('Please, fill in password.')
    }
}