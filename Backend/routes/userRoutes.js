const express = require("express");
const  signup = require("../controllers/userController.js");

const  router = express.Router();

router.post("/signup" , signup);

router.post("/login" , (req , res) => {
   
})

module.exports = router;




