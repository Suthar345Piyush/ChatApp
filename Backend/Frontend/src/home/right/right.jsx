import React, { useEffect } from 'react'
import ChatUser from './ChatUser';
import Message from './Message';
import Typesend from './Typesend';
import useConversation from '../../states/useConverstion';
import {useAuth} from "../../context/AuthProvider.jsx";


const Right = () => {

  const {selectedConversation , setSelectedConversation} = useConversation();
  useEffect(() => {
     return setSelectedConversation(null);
  } , [selectedConversation]);

  return (
    <div className="w-full bg-slate-900 text-gray-300">
       <div>
         {!selectedConversation ? (
           <NoChatSelected />
         ) : (
           <>
            <ChatUser />
            <div className="flex-1 overflow-y-auto" style={{maxHeight : "calc(88vh - 8vh)"}}>
               <Message />
            </div>
            <Typesend />
           
           </>
         )}
       </div>
    </div>
  );
}

export default Right;

const NoChatSelected = () => {
    const {authUser} = useAuth();
    console.log(authUser);

     return (
       <>
         <div>
           <label htmlFor='my-drawer-2' className="btn btn-ghost drawer-button lg:hidden absolute left-5"></label>
           <div classaName="flex h-screen items-center justify-center">
            <h1 className="text-center">
            Welcome{" "}
            <span className="font-semibold text-xl">
               {authUser?.email}
            </span>
            <br />
             No Chat selected , Start conversation with anyone you wanted to!!
            </h1>
           </div>
          </div> 
        </>
     );
};



