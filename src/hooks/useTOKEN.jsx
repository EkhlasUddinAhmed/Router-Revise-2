import { useMutation } from '@tanstack/react-query';
import axios from 'axios';



const createAccessToken=(loggedUser)=>{
    return axios.post(`http://localhost:5000/user/jwt`,loggedUser)
}
const useTOKEN = () => {
    return useMutation({
        mutationFn:createAccessToken,
        
    });
};

export default useTOKEN;