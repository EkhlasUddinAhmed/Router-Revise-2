import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
const getUserDetailsMethod=({queryKey})=>{
    const userId=queryKey[1];
    return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
}

const useUserDetails = (userId) => {
    return useQuery({
        queryKey: ['Users',userId],
        queryFn:getUserDetailsMethod
          
    })
};

export default useUserDetails;



