import React, { useState } from 'react';
import Header from "./Header";

const Login = () => {
 const [isSignInForm,setIsSignInForm]=useState(true)
  const toggleSignInForm=()=>{
 setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
      <div className='bg-opacity-50 brightness-75 absolute'>
        <img className="" src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo"></img>
      </div>
      <Header/>
      <form className='bg-black mx-auto right-0 left-0 my-28 p-11 w-3/12 absolute text-white bg-opacity-80'>
         <h2 className='text-3xl py-2 font-bold'>
          {isSignInForm ?"Sign In":"Sign Up"}</h2>
          {!isSignInForm && <input
           className="p-2 my-4  rounded-sm w-full bg-gray-700"
           type="text" 
           placeholder='Full Name'>
          </input>}
         <input
           className="p-2 my-4  rounded-sm w-full bg-gray-700"
           type="text" 
           placeholder='E-mail'>
          </input>
         <input 
           className="p-2 my-4  rounded-sm w-full bg-gray-700" 
           type="text" 
           placeholder='Password'>
         </input>
         <button className="p-2 my-4  w-full rounded-sm  bg-red-700 ">{isSignInForm?"Sign In":"Sign Up"}</button>
         <p className='py-4 text-gray-500 font-semibold cursor-pointer' onClick={toggleSignInForm}>{isSignInForm 
         ?"New to Netflix? Sign Up Now"
         :"Already user sign In now"}</p>
      </form>
    </div>
  )
}

export default Login