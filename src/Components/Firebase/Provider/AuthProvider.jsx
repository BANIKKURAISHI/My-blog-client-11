import { createContext, useState } from "react";
import { PropTypes } from 'prop-types';
import {GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from './../Firebase.config';
export const AuthContext =createContext()

const AuthProvider = ( {children} ) => {
    const [loading,setLoading]=useState(true)
//google log in     
const googleProvider= new GoogleAuthProvider();
const googleButton=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}

//registration email and password 
const createUser=(email,password)=>{
    setLoading(true) 
    return createUserWithEmailAndPassword(auth,email,password)
}

// user login 
const login=(email,password)=>{
    setLoading(true) 
    return signInWithEmailAndPassword(auth,email,password)
}

// state on auth change 



const AuthInfo ={googleButton,createUser,login,loading}
    return (
        <AuthContext.Provider  value={AuthInfo}>
           {children} 
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes={
children:PropTypes.node
}
export default AuthProvider;