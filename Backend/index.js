import express, { json } from "express";
import dotenv from "dotenv";
import { connect } from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import messageRoute from "./routes/messageRoutes.js";
import { app, server } from "./socketio/server.js";
import path from 'path';

// Configure dotenv at the top of your file
dotenv.config();

const PORT = process.env.PORT || 5003;
const URI = process.env.MONGODB_URI;

try {
  connect(URI);
  console.log("MongoDB connected");
} catch (error) {
  console.log(error);
}


app.use(cookieParser());
app.use(cors({
  origin : "http://localhost:5173",
  methods : ["GET" , "POST" , "PUT" , "PATCH" , "DELETE" , "OPTIONS"],
  allowedHeaders : ["Content-Type" , "Authorization" , "X-Requested-With"],
  credentials : true,
}));
app.use(json());
app.use("/api/user", userRoutes);
app.use("/api/message" , messageRoute);


// Code for Deployment


if(process.env.NODE_ENV === 'production'){
    const dirPath = path.resolve();
    app.use(express.static("./Frontend/dist"));
    app.get('*' , (req , res) => {
       res.sendFile(path.resolve(dirPath , './Frontend/dist' , 'index.html'));
    });

}





server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


