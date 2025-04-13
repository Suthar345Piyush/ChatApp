import React from 'react'
import ChatUser from './ChatUser';
import Message from './Message';
import Typesend from './Typesend';

const Right = () => {
  return (
    <div className="w-[78%]  border-e-indigo-700 text-white">

      <ChatUser/>
      <Message/>
      <Typesend />
    </div>
  )
}

export default Right;
