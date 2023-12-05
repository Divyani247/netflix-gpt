import { useState } from "react";
import { onAuthStateChanged,} from "firebase/auth";
import Dropdown from "./Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { addUser,removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { userAvatar } from "../utils/constant";

const Header=()=>{
    const [isActive,setisActive]=useState(false);
    const dispatch=useDispatch();
    const user=useSelector((store)=>store.user);
    const navigate=useNavigate();
    const toggleDropdown = () => {
        setisActive(!isActive);
      };

      useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
              
              const {uid,email,displayName} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName}));
            
              // ...
            
             navigate("/browse");
            }
            else {
              // User is signed out
              dispatch(removeUser());
              navigate("/")
            
            }
          });
          return()=>unsubscribe();
    },[]);
    return (
        <div className="absolute w-screen px-10 py-2 bg-gradient-to-b from-black flex justify-between">
            <img className=" w-48 font-extrabold" src={userAvatar} alt="logo"></img>
            {user && (
            <div className="flex flex-col p-2">
               <img className="w-8 h-8 ml-2 rounded-md" alt="usericon" onClick={toggleDropdown}  src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e "></img>
                {isActive && <Dropdown/>}
            </div>
            )}
        </div>
    )
}
export default Header;