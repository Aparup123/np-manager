import './CreateNote.css';
import {app} from './firebase.js';
import {useState} from 'react'
import {getAuth, onAuthStateChanged, } from 'firebase/auth'
import {getFirestore, collection, addDoc, setDoc, doc} from 'firebase/firestore'
export default function CreateNote({handleActive, currentUser}){
  const [note, setNote]=useState("");
  const db=getFirestore(app);
  const auth=getAuth(app);
  const [userEmail, setUserEmail]=useState(null);
  onAuthStateChanged(auth, (u)=>{
     setUserEmail(u.email);
     
   })
  function saveNote(){
   



  setDoc(doc(db, "users", userEmail), {
    ID: userEmail,
    notes:{
      one:"hello",
      two:"world",
    },
  
  }).then(()=>{console.log("Document written with ID: ");}).catch ((e)=>{
  console.error("Error adding document: ", e);});
    
    
    handleActive("Notes");
    }

    return<>
        <h1 className="note-heading">Note Heading {userEmail}</h1>
      <button className="save-btn btn-with-text" onClick={saveNote}>Save</button>
      <textarea type="text" className="note-box" value={note} onChange={e=>setNote(e.target.value)}/>
    
    </>
}