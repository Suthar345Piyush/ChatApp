import React from 'react'
import Search from './Search';
import Users from './Users';

const Left = () => {
  return (
    <div className="w-[22%]  bg-black text-white">
       <h1 className="text-3xl m-3 ml-1 text-green-700 font-semibold">ChatsApp</h1>
        <Search></Search>
        <hr className='mt-2 mb-3'></hr>
        <Users></Users>
    </div>
  )
}

export default Left;
