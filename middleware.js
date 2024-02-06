
const jwt = require("jsonwebtoken")

 async function checkAdmin (req,res,next) {


 try {

  if(!req.headers.cookie) {
    return  res.status(401).json({message :"unauthorized access detected"})

  }
    
    const token = req.headers.cookie.split("=")[1]
    const decoded = jwt.verify(token ,process.env.SECRET_KEY)
    

   if(decoded  && decoded.exp < Date.now)
   {
    return res.status(400).json({message :"session expired please login"})

  
   }

   else if (decoded &&  decoded['role'] !="admin")
   {



   return  res.status(401).json({message :"action reserved to admin only"})

  }





   
  } catch (error) {
    console.log(error ,"here")
    res.status(500).json({error : error})
    
  }
  next()




}


function checkAuth (req,res,next) {


  try {
     const {token }= req.body 
     console.log(token) 
     res.status(200).json({isAuth : true})
   } catch (error) {
     res.status(500).json({error : error})
 
   }
 
 
 next()
 
 
 }



 module.exports = {
  checkAdmin,checkAuth
 }