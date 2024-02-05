


module.exports = function checkAuth (req,res,next) {


 try {
    const {token }= req.body 
    console.log(token) 
    res.status(200).json({isAuth : true})
  } catch (error) {
    res.status(500).json({error : error})

  }


next()


}