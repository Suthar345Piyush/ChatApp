import React from 'react'

export  default function Signup() {
  return (
    <div>
        <form action="" className="items-center flex flex-col justify-center h-screen">
           <h1 className="text-xl font-bold mt-10">
             Create a new {" "}
             <span className="text-2xl font-bold text-green-500">Account</span>
           </h1>
           <h1 className="pb-2">It's free and always will be</h1>

           <div>
           <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
  {/* <legend className="fieldset-legend">Page details</legend> */}

  {/* full name*/ }
  <label className="fieldset-label">Yourname</label>
  <input type="text" className="input" placeholder="Enter your fullname" />

  {/* email */ }
  
  <label className="fieldset-label">Email</label>
  <input type="email" className="input" placeholder="Enter your email" />


  {/* password */ }
  <label className="fieldset-label">Password</label>
  <input type="password" className="input" placeholder="Enter your Password" />

  {/* confirmed Password */}

  <label className="fieldset-label">Confirmed Password</label>
  <input type="password" className="input" placeholder="Confirm your password" />

  {/* sign up button */}
  <input type="submit"  value="Signup" className=" text-white text-xl bg-green-500 mt-3 rounded-lg cursor-pointer text-center"></input>
   </fieldset>



   {/* Text and buttons */}
   <div className="flex flex-col items-center pt-2">
       <p className="items-center justify-center">Have any account? {" "}
          <span className="underline text-green-500 cursor-pointer">Login</span>
        </p>  
      </div>
           </div>
        </form>
    </div>
  )
};





