import React, { useEffect, useRef } from 'react'
import useGetMessage from '../../context/useGetMessage.js'
import Messages from './Messages.jsx';
import Loading from "../../components/Loading.jsx";

function Message() {
  const {loading , messages} = useGetMessage();
  // console.log(messages)
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
       if(lastMessageRef.current){
          lastMessageRef.current.scrollIntoView({behavior : "smooth"});
       }
    } , 100);
  } , [messages]);

  return (
       <div className="flex-1 overflow-y-auto"   style={{minHeight : "calc(92vh- 8vh)"}}>
          {loading ? (
             <Loading />
          ) : (
             messages.length > 0 && messages.map((message) => {
                 <div key={message._id} ref={lastMessageRef}>
                   return  <Messages  message={message}/>
                   </div>
             })
          )}
          {!loading && messages.length === 0 && (
             <div>
                <p className="text-center mt-[20%]">Say Hi , to start conversation!!</p>
               </div>
          )}
       </div>
  );
}

export default Message;




