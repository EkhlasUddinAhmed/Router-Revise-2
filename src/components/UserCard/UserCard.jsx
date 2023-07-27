import React from "react";
import { Link, useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
  const { id, name, email, phone } = user;
  const navigate = useNavigate();

  const userDetailsMethod = () => {
    navigate(`/user/${id}`, { replace: true });
  };

  return (
    <div className="col-12 col-sm-12 col-md-4 my-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{email}</h6>
          <p className="card-text">{phone}</p>
          <Link to={`/user/${id}`} className="card-link">
            {id}
          </Link>
          <Link to={`/user/${id}`}>
            <button type="button" className="btn btn-primary ms-3">
              Details
            </button>
          </Link>
          <button
            onClick={userDetailsMethod}
            type="button"
            className="btn btn-primary ms-3"
          >
            Details2
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
