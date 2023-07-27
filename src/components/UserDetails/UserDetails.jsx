import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const {userID
    }=useParams();
    console.log("User Id is:",userID);
    return (
        <div>
            <h1>User Id Details:{userID} </h1>
        </div>
    );
};

export default UserDetails;