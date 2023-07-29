import React, { useContext } from "react";
import { AuthContext } from "../Context/UserContext";
import useTitle from "../../hooks/useTitle";


const AboutUs = () => {
  // const user=useContext(AuthContext);
  useTitle("AboutUs");
  return (
    <div>
      <h1>This is About Us Page:</h1>
    </div>
  );
};

export default AboutUs;
