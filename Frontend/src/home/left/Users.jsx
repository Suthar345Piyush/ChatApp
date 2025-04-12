import React from 'react';
import useConversation from '../../states/useConverstion.js';

function Users({user}) {
  const  {selectedConversation , setSelectedConversation} = useConversation();
  const  isSelected = selectedConversation?._id === user._id;
  const isOnline = onlineUsers.includes(user._id);
  console.log(allUsers);

  return (
     <div className={`hover:bg-slate-600 duration-300 ${ isSelected ? "bg-slate-700" : ""}`}  onClick={() => setSelectedConversation(user)}>
       <div className="flex space-x-4 px-2 py-2 hover:bg-gray-400 cursor-pointer">
         <div className={`avatar ${isOnline ? "online" : ""}`}>
            <div className="w-13 rounded-full">
              <img src="https://pbs.twimg.com/profile_images/1905153443184136192/NLepSlSF_400x400.jpg" />
          </div>
            </div>
              <div>
         <h1 className="font-medium">{Users.name}</h1>
         <span className="font-light">piyush1@dev</span>
      </div>
    </div>

  </div>
  )
}

export default Users;
