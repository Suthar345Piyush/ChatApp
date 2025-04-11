import React, { useState } from 'react'
import { CiLogout } from "react-icons/ci";
import axios from 'axios';
import Cookies from 'js-cookie';

export  default function  Logout(){
  const [loading , setLoading] = useState(false);
  const handleLogout = async () => {
     setLoading(true);
      try{
         const  res = await axios.post("/api/user/logout");
         localStorage.removeItem("messsge");
         Cookies.remove("jwt");
         setLoading(false);
         alert("Logout Succussfully");
      } catch(error){
         console.log(error);
      }
  };


  
  return (
    <div className="w-[2%]  bg-green-700 text-white flex flex-col justify-end">
       <button className="cursor-pointer mb-3 hover:bg-gray-400 rounded-lg">
         <CiLogout className="size-7"/>
       </button>
    </div> 
  )
}


