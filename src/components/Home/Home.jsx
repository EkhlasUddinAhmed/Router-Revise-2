import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';

const Home = () => {
    const {activeUser}=useContext(AuthContext);
    
    return (
        <div>
            <h1 className='text-info text-center'>This is Home Page:{activeUser?.email}</h1>
            </div>
    );
};

export default Home;