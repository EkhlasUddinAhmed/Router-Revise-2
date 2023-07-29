import React from 'react';
import useAllUsers from '../../hooks/useAllUsers';
import UserCard from '../UserCard/UserCard';
import useTitle from '../../hooks/useTitle';


const Products = () => {
  useTitle("Product");
  const {isLoading,isError,error,data}=useAllUsers();

   


  if(isLoading){
     return <h1>Loading</h1>
  }
  if(isError){
      return <h1>{error.message}</h1>
  }

    return (
        <div>
            
            <h1>This is Producs page:{data?.data.length}</h1>

             <div className="container">
                <div className="row">
                {
                data?.data.map(user=><UserCard
                
                key={user.id}
                user={user}
                ></UserCard>)
            }
                </div>
             </div>
        </div>
    );
};

export default Products;