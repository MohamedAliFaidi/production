const jwt = require("jsonwebtoken")

const testAdmin = async (req, res) => {
  try {
    res.status(200).json({
      message: " you reached the backen admin route ",
    });
  } catch (error) {
    console.log(error,"in controller")
    res.status(500).json({
      message: " error",
    });
  }
};


const checkAdmin  = async (req,res)=>{
  try {

   

  //  const  token = req.headers?.cookie?.split("=")[1]
  //   const decoded = jwt.verify(token ,process.env.SECRET_KEY)
  //   if(decoded && decoded['role'] != "admin") {
  //     return  res.status(401).json({message :"action reserved to admin only"})


  //   }
  //   else    if(decoded  && decoded.exp < Date.now)
  //   {
  //    return res.status(400).json({message :"session expired please login"})
 
   
  //   }

    res.status(200).json({message:"admin role exist"})

    
  } catch (error) {

    res.status(500).json({message:"server error"})

    
  }
}





module.exports = {
  testAdmin,
  checkAdmin
};
