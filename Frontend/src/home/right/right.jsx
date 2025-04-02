import React from 'react'
import ChatUser from './ChatUser';
import Message from './Message';
import MessageType from './MessageType';

const Right = () => {
  return (
    <div className="w-[78%]  border-e-indigo-700 text-white">

      <ChatUser/>
      <Message/>
      <MessageType />
    </div>
  )
}

export default Right;
