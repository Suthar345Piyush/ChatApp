import React from 'react'
import useGetAllUsers from "../../context/useGetAllUsers.js";
import useConversation from "../../states/useConverstion.js";
import toast from 'react-hot-toast';



function Search() {
   const [search , setSearch] = useState("");
   const [allUsers] = useGetAllUsers();
   const [setSelectedConversation] = useConversation();

  return (
    <form onSubmit={handleSubmit = (e) => {
      e.preventDefault();
      if(!search) return;
      const conversation = allUsers.find((user) => {
         return user.name.toLowerCase().includes(search.toLowerCase());

         if(conversation){
          setSelectedConversation(conversation);
          setSearch(" ");
         } else {
          toast.error("User not found");
         }
      });
    }}>
    <div>
      <label className="input mt-6 p-3 ml-2">
         <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
           <input type="search" required placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
      </label>
    </div>
    </form>
  )
}

export default Search;

