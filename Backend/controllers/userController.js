const  User = require("../models/user.model.js");



const  signup = async (req , res) => {

   try{
    const {name , email , password , confirmPassword} = req.body;
    if(password !== confirmPassword){
     return res.status(400).json({
        message : "Password do not match",
     })
    };

    if(password.length < 6){
      return res.status(400).json({
        message : "Password must  be  at least  6 characters",
      })
    };

     if(!email.includes("@")){
         return res.status(400).json({
            message : "Email is not valid",
         })
     };
 
   const user  = await User.findOne({email});
   if(user){
       return res.status(400).json({
          message : "User already exists",
       })
   };

    const  newUser = await new User({
        name,
        email,
        password,
    });

    newUser.save().then(() => {
      res.status(201).json({
         message : "User  created successfully",
      })
  });

   } catch(error){
         console.log(error);
          res.status(500).json({
             message : "Server error",
          })
   };
};

module.exports = {signup};


