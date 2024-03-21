import {app} from './firebase'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import {useState} from 'react'
export default function SignIn(){
  const auth=getAuth(app);
  const [signInEmail, setSignInEmail]=useState("");
    const [signInPassword, setSignInPassword]=useState("");
    const [currentUser, setCurrenUser]=useState(auth.currentUser);
   function signIn(e){
     e.preventDefault();
     signInWithEmailAndPassword(auth, signInEmail, signInPassword).then((user)=>{
       console.log("Sign in successful for user", user.email);
     }).catch((err)=>{
       console.log("Error occured");
       console.log(err.message);
     })
   }
  return <>
     <form onSubmit={signIn}>
            <br/>
            <label htmlFor="signInEmail">Enter email</label>
            <input type="email" value={signInEmail} onChange={(e)=>setSignInEmail(e.target.value)} name="signInEmail"></input>
            <br/>
            <label htmlFor="signInPassword">Password</label>
            <input type="password" value={signInPassword} onChange={(e)=>setSignInPassword(e.target.value)} name="signInPassword"></input>
            <br/>
            <button>Sign In</button>
        </form>
  </>
}