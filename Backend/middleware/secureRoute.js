import jwt from "jsonwebtoken";
import  User from "../models/user.model.js";


const  secureRoute = async (req , res , next) => {
   try{
      const token = req.cookies.jwt;
      if(!token){
         return res.status(401).json({message : "Not authorized"});
      }
      const verified = jwt.verify(token , process.env.JWT_TOKEN);
      if(!verified){
         return res.status(403).json({message : "Token expired"});
      }
       const user = await User.findById(verified.userId).select("-password");
   } catch(error){
     console.log(error);
     res.status(501).json({message : "Internal server error"});
   }
};

