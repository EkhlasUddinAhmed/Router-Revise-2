import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
const UserContext = ({ children }) => {
  const [activeUser, setactiveUser] = useState({});
  const [loading, setLoading] = useState(true);
  

  //    CREATE CUSTOM USER WITH EMAIL AND PASSWORD

  const createCustomUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // CREATE CUSTOM LOG IN WITH EMAIL & PASSWORD

  const customUserLogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // CREATING GOOGLE LOG IN SYSTEM
  
  const provider = new GoogleAuthProvider();
  const googleLogInHandler = () => {
    setLoading(true);
    return signInWithPopup(auth, provider)
    
  };

  // Applying Sign Out Method...

  const customSignOut = () => {
    return signOut(auth);
  };

  // Applying OnAuthState Change Function

  useEffect(() => {
    const unSubsCribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        const email = user.email;
        setactiveUser(user);
        setLoading(false);
        // .....................Fetching....
  fetch('http://localhost:5000/user/jwt', {
    method: 'POST',
    body: JSON.stringify({email}),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) =>{
      console.log(data);
      localStorage.setItem("Token",data.token);
      
    } );

      } else {
        setactiveUser({});
        setLoading(false);
      }
    });

    return () => {
      unSubsCribed();
    };
  }, []);

  const userInfo = {
    activeUser,
    setactiveUser,
    loading,
    setLoading,
    createCustomUser,
    customSignOut,
    customUserLogIn,
    googleLogInHandler,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
