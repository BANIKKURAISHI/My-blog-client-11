import { createContext, useEffect, useState } from "react";
import { PropTypes } from 'prop-types';
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from './../Firebase.config';
export const AuthContext =createContext()

const AuthProvider = ( {children} ) => {
    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState()
    
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
useEffect(()=>{
const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)
    setLoading(false)
})
return()=>{unSubscribe()
}
},[])

const logOut=()=>{
setLoading(true)
return signOut(auth)
}


const AuthInfo ={googleButton,createUser,login,logOut,loading,user}
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