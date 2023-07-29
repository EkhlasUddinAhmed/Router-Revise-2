import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2';
const Home = () => {
    const {activeUser}=useContext(AuthContext);
    useTitle("Home");
    
const addCofeeHandler=()=>{
    Swal.fire({
        title: 'Success',
        text: 'Coffee Inserted Successfully',
        icon: 'success',
        confirmButtonText: 'OK'
      })
}

    return (
        <div>
            <h1 className='text-primary text-center'>This is Home Page:{activeUser?.email}</h1>
            <button 
            onClick={addCofeeHandler}
            className='btn btn-primary'>AddCoffee</button>
            </div>
    );
};

export default Home;