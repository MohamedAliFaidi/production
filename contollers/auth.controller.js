const User = require("../models/user.model");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const isUser = await User.findOne({ email: req.body.email });
    console.log(isUser);
    if (isUser) {
       res.status(400).json({ message: "user already exist" });
    } else {
      const hash =await bcrypt.hash(req.body.password, 10);
      const newUser = await User.create({
        email: req.body.email,
        password: hash,
      });

       res.status(201).json({ message: "ok"  });
    }
  } catch (error) {
    console.log(error)
        
    res.status(500).json({ message: "error" });
  }
};



const login = async(req,res)=>{
    try {

      const isUser = await User.findOne({ email: req.body.email });
        if (!isUser) {
           res.status(400).json({ message: "user notfound" });
        } 

        else {
            const match  = await bcrypt.compare(req.body.password, isUser.password)

            if(!match) {
              res.status(401).json({ message: "wrong password" });
          }
            else{
                const exp = Date.now() +   1000*60*60 ;
                const token = jwt.sign({ id:isUser._id, exp , role: isUser.role }, process.env.SECRET_KEY);
                res.cookie("Authorization",token).status(200).json({ user:{
                  email :isUser.email,
                  _id : isUser._id,
                  role: isUser.role
                }  });
            }
        }
    } catch (error) {
        res.status(500).json({ message:"error"})

    }
}


const check = async function (req,res) {
  try {
 
  
    res.status(200).json({isAuth : true})
  } catch (error) {
    res.status(500).json({error : error})

  }

}



const logout = async (req,res)=>{

  res.clearCookie("Authorization")
  res.status(200).json({message : "logged out"})


}
module.exports = { register , login ,check,logout };
