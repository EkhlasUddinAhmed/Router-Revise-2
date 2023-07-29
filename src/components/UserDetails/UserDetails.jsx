import React from "react";
import { Link, useParams } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import useUserDetails from "../../hooks/useUserDetails";

const UserDetails = () => {
  useTitle("P-Details");
  const { userID } = useParams();
  console.log("User Id is:", userID);
  const { isLoading, isError, error, data } = useUserDetails(userID);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className="border border-2 border-primary ">
      <h1>Dr Name is :{data?.data.name} </h1>
      <h1>Dr Phone Number is :{data?.data.phone} </h1>
      <Link to={`/appointment/${data?.data.id}`}>
        <button type="button" className="btn btn-primary text-white">
          AppointNow
        </button>
      </Link>
    </div>
  );
};

export default UserDetails;
