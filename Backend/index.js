import express, { json } from "express";
import dotenv from "dotenv";
import { connect } from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";

// Configure dotenv at the top of your file
dotenv.config();

const PORT = process.env.PORT || 5002;
const URI = process.env.MONGODB_URI;

try {
  connect(URI);
  console.log("MongoDB connected");
} catch (error) {
  console.log(error);
}

const app = express();
app.use(cors({
  origin : "http://localhost:5173",
  methods : ["GET" , "POST" , "PUT" , "PATCH" , "DELETE" , "OPTIONS"],
  allowedHeaders : ["Content-Type" , "Authorization" , "X-Requested-With"],
  credentials : true,
}));
app.use(json());
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});