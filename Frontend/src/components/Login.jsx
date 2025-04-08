import React from 'react'
import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../context/AuthProvider";
import { Link } from 'react-router-dom';

export default function Login() {
   const [authUser , setAuthUser] = useAuth();
 
  const  {
     register,
     handleSubmit,
     formState : { errors},
  } = useForm();

  const onSubmit = (data) => {
     const  userInfo = {
        email : data.email,
        password : data.password,
     };


     axios.post("http://localhost:5001/user/login" , userInfo)
     .then((response) => {
        if(response.data){
           alert("Login Successful");
        }
        localStorage.setItem("message" , JSON.stringify(response.data));
        setAuthUser(response.data);
     })
     .catch((error) => {
       if(error.response){
          alert("Error: " + error.response.data.error);
       }
     });
  };

  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)} className="items-center flex flex-col justify-center h-screen">
       <h1 className="text-xl font-bold mt-10">
         Login to your {" "}
         <span className="text-2xl font-bold text-green-500">Account</span>
       </h1>
       <h1 className="pb-2">Welcome Again!!!</h1>

       <div>
      <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
        
        
  {/* email */ }

<label className="fieldset-label">Email</label>
<input type="email" className="input" placeholder="Enter your email" {...register ("email" , {required : true})}/>
{
   errors.email && (
     <span className="text-red-500 text-sm font-semibold">**This  field is  required**</span>
   )
}

{/* password */ }

<label className="fieldset-label">Password</label>
<input type="password" className="input" placeholder="Enter your Password" {...register("password" , {required : true})}/>
{
  errors.password && (
     <span className="text-red-500 text-sm font-semibold">**This field is required**</span>
  )
}

{/* Login button */}

<input type="submit" value="Login" className="text-white bg-green-500 cursor-pointer text-center mt-3 rounded-2xl"></input>

</fieldset>



{/* Text and buttons */}

<div className="flex flex-col items-center pt-2">
   <p className="items-center justify-center">Want to create a new Account? {" "}
      <Link  to={"/signup"}  className="underline text-green-500 cursor-pointer">Signup</Link>
        </p>  
      </div>
   </div>
 </form>
</div>
  )
};



