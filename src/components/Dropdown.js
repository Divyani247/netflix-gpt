import React from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const Dropdown = () => {
    const navigate=useNavigate();
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            navigate('/')
          }).catch((error) => {
            // An error happened.
            navigate('/error')
          });
    }
  return (
    <ul className="bg-black text-white w-20 top-16 right-5 absolute rounded-md" >
      <li className='p-2 cursor-pointer'>Account</li>
      <li className='p-2 cursor-pointer'>Setting</li>
      <li onClick={handleSignOut} className='p-2 cursor-pointer'>Sign out</li>
  </ul>
  )
}

export default Dropdown