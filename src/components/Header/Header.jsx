import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
// import './Header.scss';
const Header = () => {
  const { activeUser,setactiveUser,customSignOut } = useContext(AuthContext);

  console.log("From Header, Active User is:", activeUser);
  const customSignOutHandler=()=>{
    customSignOut()
    .then(() => {
      setactiveUser({});
     }).catch((error) => {
       // An error happened.
     });
  }
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg menue-bar-design ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/aboutus"
                >
                  AboutUs
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/product"
                >
                  Product
                </NavLink>
              </li>
              {
                !activeUser.email?
                <>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/login"
                  >
                    LogIn
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to="/register"
                  >
                    Register
                  </NavLink>
                </li>
              </>
              :
              <li className="nav-item">
                <NavLink 
                 onClick={customSignOutHandler}
                
                to="">LogOut</NavLink>
              </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
