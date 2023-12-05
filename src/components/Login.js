import React, { useState, useRef} from 'react';
import Header from "./Header";
import { CheckValidData } from './Validate';
import { auth } from '../utils/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const Login = () => {
 const [isSignInForm,setIsSignInForm]=useState(true);
 const [errorMessage,seterrorMessage]=useState(null);
const name=useRef(null)
const email=useRef(null);
const Password= useRef(null);
const handleButtonClick=()=>{
  const message=CheckValidData(email.current.value,Password.current.value);
  seterrorMessage(message);

  if(message) return;
  
  if(!isSignInForm)
  {
    createUserWithEmailAndPassword(
       auth,
       email.current.value, 
       Password.current.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;

      updateProfile(user, {
        displayName: name.current.value, photoURL: ""
      }).then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
        seterrorMessage(errorMessage);
      });

      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      seterrorMessage(errorCode+"-"+errorMessage);

    });
  }

  else
  {
    signInWithEmailAndPassword(auth, email.current.value, Password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      seterrorMessage(errorCode+"-"+errorMessage);
     
    });
  
  }


}
//console.log(email.current.value);
//console.log(Password.current.value);

  const toggleSignInForm=()=>{
 setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
      <div className='bg-opacity-50 brightness-75 absolute'>
        <img className="" src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo"></img>
      </div>
      <Header/>
      <form onSubmit={(e)=>e.preventDefault()} className='bg-black mx-auto right-0 left-0 my-28 p-11 w-3/12 absolute text-white bg-opacity-80'>
         <h2 className='text-3xl py-2 font-bold'>
          {isSignInForm ?"Sign In":"Sign Up"}</h2>
          {!isSignInForm && 
          <input
          ref={name}
           className="p-2 my-4  rounded-sm w-full bg-gray-700"
           type="text" 
           placeholder='Full Name'>
          </input>}
         <input
          ref={email}
           className="p-2 my-4  rounded-sm w-full bg-gray-700"
           type="text" 
           placeholder='E-mail'>
          </input>
         <input 
           ref={Password}
           className="p-2 my-4  rounded-sm w-full bg-gray-700" 
           type="text" 
           placeholder='Password'>
         </input>
         <p className='text-red-600' >{errorMessage}</p>
         <button  onClick={handleButtonClick}className="p-2 my-4  w-full rounded-sm  bg-red-700 " >{isSignInForm?"Sign In":"Sign Up"}</button>
         <p className='py-4 text-gray-500 font-semibold cursor-pointer' onClick={toggleSignInForm}>{isSignInForm 
         ?"New to Netflix? Sign Up Now"
         :"Already user sign In now"}</p>
      </form>
    </div>
  )
}

export default Login