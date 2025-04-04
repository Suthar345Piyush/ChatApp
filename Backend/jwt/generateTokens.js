const jwt = require('jsonwebtoken');

const  createTokenAndSaveCookies = (userId , res) => {
    const  token = jwt.sign({userId} , process.env.JWT_TOKEN , {
        expiresIn : "6d",
    });

    res.cookie("jwt" , token , {
       httpOnly : true,  // for XSS attacks 
       secure : true,
      sameSite : "strict", // for  csrf attacks 
    });
};

module.exports = createTokenAndSaveCookies;


