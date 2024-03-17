import { useState } from 'react';
import {app} from './firebase.js'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from 'firebase/auth'
const auth=getAuth(app);
export default function SignUp(){
    const [signUpEmail, setSignUpEmail]=useState("");
    const [signUpPassword, setSignUpPassword]=useState("");
    const [currentUser, setCurrenUser]=useState(auth.currentUser);
   
    
    onAuthStateChanged(auth, (user)=>{

        if(user){
            console.log("The email is", currentUser.email);
            console.log("user is signed in");
            console.log(user.email);
        }else{
            console.log("user is signed out");
        }
    })
    function signUp(e){
        e.preventDefault();
        if(signUpEmail==""||signUpPassword==""){
            alert("Field Empty!");
        }else{
            console.log(signUpEmail,"->",signUpPassword);
            createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword).then((m)=>{
                console.log("Successfully signed up!");
                console.log(m);
                
            }).catch((err)=>{
                console.log("Error");
                console.log(err.message);
            });
        }
        }
        
    
    return<>
        <form onSubmit={signUp}>
            <br/>
            <label htmlFor="signupEmail">Enter email</label>
            <input type="email" value={signUpEmail} onChange={(e)=>setSignUpEmail(e.target.value)} name="signUpEmail"></input>
            <br/>
            <label htmlFor="signupPassword">Password</label>
            <input type="password" value={signUpPassword} onChange={(e)=>setSignUpPassword(e.target.value)} name="signUpPassword"></input>
            <br/>
            <button>Sign up</button>
        </form>
    </>
}