import React, { useState } from 'react'
import { auth, db } from '../../database/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from 'firebase/firestore';

function Signup() {
  const [email, setEmail] = useState('')
  const [pswd, setPswd] = useState('')
  const [name, setName] = useState('')

  function handleSignup() {
  createUserWithEmailAndPassword(auth, email, pswd)
  .then((userCredential) => {
  addDoc(collection(db, "users"), {name, email});
    // console.log(userCredential);
  })
  .catch((error) =>  alert(error))
};
  return (
    <div>
        <input type='text' placeholder='name' onChange={(event)=> setName(event.target.value)}/>
        <input type='email' placeholder='email' onChange={(event)=> setEmail(event.target.value)}/>
        <input type='password' placeholder='password' onChange={(event)=> setPswd(event.target.value)}/>
         <button onClick={handleSignup}>Signup</button>
    </div>
  )
}

export default Signup