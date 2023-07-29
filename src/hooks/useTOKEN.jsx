import { useMutation } from '@tanstack/react-query';
import axios from 'axios';



const createAccessToken=(loggedUser)=>{
    return axios.post(`https://router-revise-2-server.vercel.app/user/jwt`,loggedUser)
}
const useTOKEN = () => {
    return useMutation({
        mutationFn:createAccessToken,
        
    });
};

export default useTOKEN;