const express = require("express");
const app = express()
require("dotenv").config();
const mongoose = require("mongoose");
const  userRoutes = require("./routes/userRoutes.js");


const  PORT = process.env.PORT || 5002;
const URI  = process.env.MONGODB_URI;

try{
  mongoose.connect(URI);
  console.log("MongoDB connected");
} catch(error){
  console.log(error);
}

app.use(express.json());

app.use("/user" , userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})