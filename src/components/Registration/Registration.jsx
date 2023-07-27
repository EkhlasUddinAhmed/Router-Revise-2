import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
const Registration = () => {
  const { createCustomUser } = useContext(AuthContext);
  const navigate=useNavigate();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const registrationMethod = (e) => {
    e.preventDefault();

    const newUser = {
      userName,
      userEmail,
      userPassword,
    };

    console.log("New User is:", newUser);

    if (userPassword.length < 6) {
      setErrorMessage("Password should be atleast 6 character");
      return;
    }

    createCustomUser(userEmail, userPassword)
    .then((userCredential) => {
       
        const user = userCredential.user;
          console.log("New User Created is:",user);
          navigate("/home",{replace:true});
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("New User Creating Error is:",errorMessage);
      });
    setUserName("");
    setUserEmail("");
    setUserPassword("");
  };
  return (
    <div className=" form-section ">
      <div className="form-container shadow-lg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form onSubmit={registrationMethod}>
                <h2 className="text-center fs-1 text-primary">REGISTER</h2>
                <div className="mb-3">
                  <label htmlFor="userName" className="form-label">
                    <h5 className="fw-normal"> Name</h5>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="userEmail" className="form-label">
                    <h5 className="fw-normal"> Email</h5>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="userEmail"
                    required
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="userPassword" className="form-label">
                    <h5 className="fw-normal"> Password</h5>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="userPassword"
                    required
                    value={userPassword}
                    onChange={(e) => {
                      setErrorMessage("");
                      setUserPassword(e.target.value);
                    }}
                  />
                  {errorMessage ? (
                    <p className="text-danger"> {errorMessage}</p>
                  ) : (
                    ""
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary mt-3 w-100 text-white fs-4"
                >
                  Register
                </button>

                <h6 className="p-0 m-0 py-1 text-center text-secondary">OR</h6>

                <button
                  type="submit"
                  className="btn btn-outline-info mt-1 w-100  fs-4"
                >
                  <i className="fa-brands fa-google"></i>oogle Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
