import React from 'react'
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from '../context/AuthProvider';
import { Link } from 'react-router-dom';

export  default function Signup() {
   const  [authUser , setAuthUser] = useAuth();
  const { 
    register, handleSubmit, watch, formState: { errors },
   } = useForm();

  const password = watch("password" , "");
  const  confirmPassword = watch("confirmPassword" , "");

 const  validatePasswordMatch = (value) => {
    return value === password || "Passwords do not match";
 };

  const onSubmit = async (data) => {
      const  userInfo = {
         fullname: data.fullname,
         email : data.email,
         password : data.password,
         confirmPassword : data.confirmPassword,
      };
      //  console.log(userInfo);
      await axios.post("http://localhost:5001/user/signup" , userInfo)
      .then((response) => {
         console.log(response.data);
          if(response.data){
             alert("Signup successful! You can login now.");
          }
          localStorage.setItem("message" , JSON.stringify(response.data));
          setAuthUser(response.data);
      })
      .catch((errors) => {
          if(errors.response){
             alert("Error: " + errors.response.data.errors);
          }
      });
  };

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className="items-center flex flex-col justify-center h-screen">
           <h1 className="text-xl font-bold mt-10">
             Create a new {" "}
             <span className="text-2xl font-bold text-green-500">Account</span>
           </h1>
           <h1 className="pb-2">It's free and always will be</h1>
           <div>
           <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">

  {/* full name*/ }

  <label className="fieldset-label">Yourname</label>
  <input type="text" className="input" placeholder="Enter your fullname"   {...register("fullname" , {required : true})}/>
  {
    errors.fullname && (<span className="text-red-500 text-sm font-semibold">**This field is required**</span>)
  }

  {/* email */ }
  
  <label className="fieldset-label">Email</label>
  <input type="email" className="input" placeholder="Enter your email" 
    {...register("email" , {required : true})}/>
    {
      errors.email && (<span className="text-red-500 text-sm font-semibold">**This field is required**</span>)
    }

  {/* password */ }

  <label className="fieldset-label">Password</label>
  <input type="password" className="input" placeholder="Enter your Password"   {...register("password" , {required : true})}/>
  {
    errors.password && (<span className="text-red-500 text-sm font-semibold">**This field is required**</span>)
  }

  {/* confirmed Password */}

  <label className="fieldset-label">Confirmed Password</label>
  <input type="password" className="input" placeholder="Confirm your password"  {...register("confirmPassword"  , {required : true , validate : validatePasswordMatch})}/>
  {
    errors.confirmPassword && (<span className="text-red-500 text-sm font-semibold">{errors.confirmPassword.message}</span>)
  }

  {/* sign up button */}

  <input type="submit"  value="Signup" className=" text-white text-xl bg-green-500 mt-3 rounded-2xl cursor-pointer text-center"></input>
   </fieldset>

   {/* Text and buttons */}

   <div className="flex flex-col items-center pt-2">
       <p className="items-center justify-center">Have any account? {" "}
          <Link to={"/login"}  className="underline text-green-500 cursor-pointer">Login</Link>
        </p>  
      </div>
    </div>
  </form>
 </div>
  )
};





