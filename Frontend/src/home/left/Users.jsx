import React from 'react';
import User from './User';
import useGetAllUsers from '../../context/useGetAllUsers.js';

function Users(){
    const  [allUsers  , loading] = useGetAllUsers();
    console.log(allUsers);
    return(
       <div>
         <h1 className="px-8 py-2 text-white font-semibold bg-slate-800 rounded-md">Messages</h1>
         <div className="py-2 flex-1 overflow-y-auto" style={{maxHeight : "calc(84vh - 10vh)"}}
         >
           {loading ? (
            <p>Loading users...</p>
           ) : (
             Array.isArray(allUsers) ? allUsers.map((allUsers , index ) => (
              <User key={index} user={allUsers}/>
             ))
             : <p>No users found</p>
           )}
         </div>
       </div>
    )
};


export  default Users;
