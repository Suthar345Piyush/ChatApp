import React from 'react'

function Messages({message}) {
  const authUser = JSON.parse(localStorage.getItem("message"));
  const itsme = message.senderId === authUser.user._id;
  const chatName = itsme ? "chat-end" : "chat-start";
  const chatColor = itsme ? "bg-blue-400" : "";

  return (
 <>
   <div className="p-4">
       <div className={`chat ${chatName}`}>
         <div className={`chat-bubble text-white ${chatColor}`}>{message.message}</div>
       </div>
    </div>
 </>
  );
}

export default Messages;


