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
                const exp = Date.now() + 1000*45  //1000*60*60 ;
                const token = jwt.sign({ id:isUser._id, exp }, process.env.SECRET_KEY);
                res.cookie("Authorization",token).status(200).json({ token: token });
            }
        }
    } catch (error) {
        res.status(500).json({ message:"error"})

    }
}


const check = async function (req,res) {
  try {
    const {token }= req.body 
    console.log(token)
const decoded = jwt.verify(token ,process.env.SECRET_KEY)
console.log(decoded)

if(decoded && decoded.exp < Date.now())
  res.status(400).json({isAuth :false})

     else
    res.status(200).json({isAuth : true})
  } catch (error) {
    res.status(500).json({error : error})

  }

}
module.exports = { register , login ,check };
