const  express = require("express");
const app = express()
const dotenv = require("dotenv");
  dotenv.config();
const  mongoose = require('mongoose');

const  PORT = process.env.PORT || 5002;


app.get('/', (req, res) => {
  res.send('Hello hey , are  you gay !')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})