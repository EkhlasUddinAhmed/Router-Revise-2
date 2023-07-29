import React from 'react';

const AppointCard = ({appoint,deleteMethodHandler}) => {
    const {pName,pEmail,dName,aDate,_id}=appoint;
    return (
        <div className='border border-2 border-primary col-12 col-sm-12 col-md-6 p-3 '>
            <h3 className='text-danger'>Patient Name:{pName}</h3>
            <h3>Patient Email:{pEmail}</h3>
            <h4 className='text-secondary'>Doctor Name:{dName}</h4>
            <h4>Patient Email:{aDate}</h4>
            <button 
             onClick={()=>deleteMethodHandler(_id)}
            type="button" className="btn btn-danger">Delete</button>

        </div>
    );
};

export default AppointCard;