import React from 'react'
import { CiLogout } from "react-icons/ci";

const Logout = () => {
  return (
    <div className="w-[2%]  bg-green-700 text-white flex flex-col justify-end">
       <button className="cursor-pointer mb-3 hover:bg-gray-400 rounded-lg">
         <CiLogout className="size-7"/>
       </button>
    </div> 
  )
}

export default Logout;
