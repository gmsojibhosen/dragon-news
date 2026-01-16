import React, { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
// register firebase
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    };
// current accout hole
  const authData = {
    user,
    setUser,
    createUser,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
