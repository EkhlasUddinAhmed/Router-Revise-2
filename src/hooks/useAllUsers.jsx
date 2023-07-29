import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getAllUserMethod=()=>{
    return axios.get("https://jsonplaceholder.typicode.com/users");
}
const useAllUsers = () => {
    return useQuery({
        queryKey: ['Users'],
        queryFn: getAllUserMethod
          
    })
};

export default useAllUsers;