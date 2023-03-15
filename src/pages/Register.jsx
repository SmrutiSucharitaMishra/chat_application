import React from 'react';
import Add from "../img/avtar-1.png"
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from ' ../firebase';
import { useState } from 'react';



const Register=()=> {
  const [err,setErr]=useState(false);
  const handleSubmit=async (e)=>{
    e.preventDefault()
   const displayName = e.target[0].value;
   const email = e.target[1].value;
   const password = e.target[2].value;
   const file = e.target[3].files[0];

   try{
const res= await createUserWithEmailAndPassword(auth, email, password);
   }catch(err){
   setErr(true);
   }
  }
  return (
    <div className="formContainer">
       <div className="formWrapper">
        <span className='logo'>Smruti Chat</span>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
    <input type="text" placeholder='display name'/>
    <input type="email" placeholder='email'/>
    <input type="password" placeholder='password'/>
    <input style={{display:"none"}}  type="file" id='file'/>
    <label>
        <img src ={Add}alt=""/>
        <span>Add an avtar</span>
    </label>
    <button>Sign Up</button>   
</form>
<p>You do have an account ? Login</p>
</div>
</div>
  )
  }
export default Register;