import React from 'react'
import useGetAllUsers from '../../context/useGetAllUsers';
import useConversation from '../../states/useConverstion.js';

function Users() {
  const  [allUsers , loading] = useGetAllUsers();
  const  {selectedConversation , setSelectedConversation} = useConversation();
  const  isSelected = selectedConversation?._id === Users._id;
  console.log(allUsers);

  return (
    <div className={`hover:bg-slate-600 duration-300 ${
       isSelected ? "bg-slate-700" : ""
    }`} onClick={() => setSelectedConversation(Users)}>
  <div style={{maxHeight : "calc(92vh)"}} className="overflow-y-auto">
    <div className="flex space-x-4 px-2 py-2 hover:bg-gray-400 cursor-pointer">
      <div className="avatar avatar-online">
        <div className="w-13 rounded-full">
         <img src="https://pbs.twimg.com/profile_images/1905153443184136192/NLepSlSF_400x400.jpg" />
        </div>
     </div>
      <div>
         <h1 className="font-medium">Piyush s1</h1>
         <span className="font-light">piyush1@dev</span>
      </div>
    </div>

  <div className="flex space-x-4 px-2 py-2 hover:bg-gray-400 cursor-pointer">
 <div className="avatar avatar-online">
  <div className="w-13 rounded-full">
   <img src="https://pbs.twimg.com/profile_images/1905153443184136192/NLepSlSF_400x400.jpg" />
  </div>
 </div>
 <div>
   <h1 className="font-medium">Piyush s2</h1>
   <span className="font-light">piyush2@dev</span>
 </div>
  </div>

 <div className="flex space-x-4 px-2 py-2 hover:bg-gray-400 cursor-pointer">
 <div className="avatar avatar-online">
  <div className="w-13 rounded-full">
   <img src="https://pbs.twimg.com/profile_images/1905153443184136192/NLepSlSF_400x400.jpg" />
  </div>
 </div>
 <div>
   <h1 className="font-medium">Piyush s3</h1>
   <span className="font-light">piyush3@dev</span>
 </div>
 </div>

 <div className="flex space-x-4 px-2 py-2 hover:bg-gray-400 cursor-pointer">
 <div className="avatar avatar-online">
  <div className="w-13 rounded-full">
   <img src="https://pbs.twimg.com/profile_images/1905153443184136192/NLepSlSF_400x400.jpg" />
  </div>
     </div>
    <div>
   <h1 className="font-medium">Piyush s4</h1>
   <span className="font-light">piyush4@dev</span>
   </div>
     </div>

     <div className="flex space-x-4 px-2 py-2 hover:bg-gray-400 cursor-pointer">
      <div className="avatar avatar-online">
        <div className="w-13 rounded-full">
         <img src="https://pbs.twimg.com/profile_images/1905153443184136192/NLepSlSF_400x400.jpg" />
        </div>
     </div>
      <div>
         <h1 className="font-medium">Piyush s5</h1>
         <span className="font-light">piyush5@dev</span>
      </div>
    </div>

    <div className="flex space-x-4 px-2 py-2 hover:bg-gray-400 cursor-pointer">
      <div className="avatar avatar-online">
        <div className="w-13 rounded-full">
         <img src="https://pbs.twimg.com/profile_images/1905153443184136192/NLepSlSF_400x400.jpg" />
        </div>
     </div>
      <div>
         <h1 className="font-medium">Piyush s6</h1>
         <span className="font-light">piyush6@dev</span>
      </div>
    </div>
  </div>
</div>
  )
}

export default Users;
