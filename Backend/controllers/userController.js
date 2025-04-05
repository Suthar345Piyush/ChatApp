import createTokenAndSaveCookies from "../jwt/generateTokens.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Password do not match",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters",
      });
    }

    if (!email.includes("@")) {
      return res.status(400).json({
        message: "Email is not valid",
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Password hashing
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    createTokenAndSaveCookies(newUser._id, res);
    
    if (newUser) {
      res.status(201).json({
        message: "User created successfully",
        newUser
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }
    
    createTokenAndSaveCookies(user._id, res);
    
    res.status(200).json({
      message: "User logged in successfully",
      user: {
        _id: user._id,
        fullname: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server error",
    });
  }
};


export const logout = async (req , res) => {
   try {
       res.clearCookie("jwt");
       res.status(201).json({ message : "user logged out successfully"});
   } catch(error){
       console.log(error);
       res.status(500).json({message : "Internal server error"});
   }
};

