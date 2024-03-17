import { useState } from 'react';
import {app} from './firebase.js';
import {signOut, onAuthStateChanged, getAuth} from 'firebase/auth';

const auth=getAuth(app);



export default function UserProfile({handleActive}){

    function userSignOut(){
        signOut(auth).then(()=>{
            console.log("Successfully Signed out");
            handleActive("SignUp")

        }).catch((err)=>{
            console.log("Failed to sign out");
            console.log(err);
        })
    }
    const [currentUser, setCurrenUser]=useState(auth.currentUser);
    return <>
    <h1>User Profile</h1>
        <h4>User Email:{currentUser.email}</h4>
        <button onClick={userSignOut}>Sign Out</button>
    </>
}