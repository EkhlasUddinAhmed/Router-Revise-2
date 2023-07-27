import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const LogIn = () => {
  const {activeUser, setactiveUser,customUserLogIn,googleLogInHandler}=useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageGoogle, setErrorMessageGoogle] = useState("");
  const location=useLocation();
  const navigate=useNavigate();
  const REDIRECT_URL=location.state?.from?.pathname || "/"

const logInHandler=(e)=>{
e.preventDefault();
const loggedUser={
  userEmail,
  userPassword
}

customUserLogIn(userEmail,userPassword)
.then((userCredential) => {
 
  const user = userCredential.user;
  setactiveUser(user);
  console.log("Custom Logged User is:",user);
  navigate(REDIRECT_URL,{replace:true});
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log("Custom Logged I User Error:",errorMessage);
  setErrorMessage(errorMessage);
});



console.log("Logged In User is:",loggedUser);
setUserEmail("");
setUserPassword("");
}

const googleUserLogIn=()=>{
  setErrorMessageGoogle("");
  
  googleLogInHandler()
  .then((result) => {
        
       
    const user = result.user;
    setactiveUser(user);
    console.log("Google Logged In User is:",user);
    navigate(REDIRECT_URL,{replace:true});
  }).catch((error) => {
    
    const errorMessage = error.message;
    setErrorMessageGoogle(errorMessage);
    
    
  });
}

  return (
    <div className=" form-section ">
      <div className="form-container shadow-lg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form onSubmit={logInHandler}>
                <h2 className="text-center fs-1 text-primary">LOGIN</h2>
                <div className="mb-3">
                  <label htmlFor="Email" className="form-label">
                    <h5 className="fw-normal"> Email</h5>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="Email"
                    required
                    value={userEmail}
                    onChange={(e) =>{
                      setErrorMessage("");
                      setErrorMessageGoogle("");
                      setUserEmail(e.target.value)
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Password" className="form-label">
                    <h5 className="fw-normal"> Password</h5>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="Password"
                    value={userPassword}
                    required
                    onChange={(e) => {
                      setErrorMessage("");
                      setErrorMessageGoogle("");
                      setUserPassword(e.target.value);
                    }}
                  />
                </div>
                 <p className="text-danger text-center">
                  {
                    errorMessage
                  }
                 </p>
                <button
                  type="submit"
                  className="btn btn-primary mt-3 w-100 text-white fs-4"
                >
                  Login
                </button>
                <p className="mt-2 text-danger">
                  Forgot password?{" "}
                  <Link>
                    <span className="text-primary">reset password</span>
                  </Link>{" "}
                </p>

                <p className="mt-2 text-danger">
                  I am New?{" "}
                  <Link>
                    <span className="text-primary">Register here</span>
                  </Link>{" "}
                </p>

                <button
                onClick={googleUserLogIn}
                  type="submit"
                  className="btn btn-outline-info mt-3 w-100  fs-4"
                >
                  <i className="fa-brands fa-google"></i>oogle Sign in
                </button>
                <p className="text-danger text-center">
                {
                  errorMessageGoogle
                }
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
