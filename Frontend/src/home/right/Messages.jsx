import React from 'react'

function Messages({message}) {
  return (
     <>
       <div className="chat chat-start">
         <div className="chat-bubble chat-bubble-accent">{message}</div>
       </div>


       <div className="chat chat-end">
         <div className="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
       </div>
     </>
  )
}

export default Messages

