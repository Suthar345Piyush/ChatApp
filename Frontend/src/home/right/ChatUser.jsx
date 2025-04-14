import React from 'react'
import useConversation from '../../states/useConverstion.js'

function ChatUser() {
  const  {selectedConversation} = useConversation();
  console.log(selectedConversation);
  const {onlineUsers} = useSocketContext();
  const getOnlineUserStatus = (userId) => {
    return onlineUsers.includes(userId)  ? "Online" : "Offline";
  };



  return (
    <>
    <div className="flex space-x-4 p-2">
     <div>
      {/* <div className={`avatar ${isOnline ? "Online" : "Offline"}`}> */}
      <div className={`avatar online`}>
        <div className="w-13 rounded-full cursor-pointer">
          <img src="https://pbs.twimg.com/profile_images/1905153443184136192/NLepSlSF_400x400.jpg" />
        </div>
      </div>  
     </div>

      <div>
        <h1 className="text-xl">{selectedConversation?.email}</h1>
         <span className="text-sm">{getOnlineUserStatus.selectedConversation._id}</span>
      </div>
     </div>
     <hr className="mt-0.5"></hr>
  </>
  )
};

export default ChatUser
