import express, { json } from "express";
const app = express()
require("dotenv").config();
import { connect } from "mongoose";
import userRoutes from "./routes/userRoutes.js";


const  PORT = process.env.PORT || 5002;
const URI  = process.env.MONGODB_URI;

try{
  connect(URI);
  console.log("MongoDB connected");
} catch(error){
  console.log(error);
}

app.use(json());

app.use("/user" , userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})