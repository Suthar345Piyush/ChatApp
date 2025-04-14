import React from 'react';
import useConversation from '../../states/useConverstion.js';
import { useSocketContext } from '../../context/SocketContext.jsx';



function User({user}) {
  const  {selectedConversation , setSelectedConversation} = useConversation();
  const  isSelected = selectedConversation?._id === user._id;
  const {socket  , onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.include(user._id);


  return (
     <div className={`hover:bg-slate-600 duration-300 ${ isSelected ? "bg-slate-700" : ""}`}  onClick={() => setSelectedConversation(user)}>
       <div className="flex space-x-4 px-2 py-2 hover:bg-gray-400 cursor-pointer">
         <div className={`avatar ${isOnline ? "Online" : "Offline"}`}>
            <div className="w-13 rounded-full">
              <img src="https://pbs.twimg.com/profile_images/1905153443184136192/NLepSlSF_400x400.jpg" />
          </div>
            </div>
              <div>
         <h1 className="font-medium">{user.name}</h1>
         <span>{user.email}</span>
      </div>
    </div>
  </div>
  )
}

export default User;

