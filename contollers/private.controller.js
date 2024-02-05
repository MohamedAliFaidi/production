module.exports = function privateRouteController (req,res) {

 try {

    res.status(200).json({
        message:"your reached the backend private"
    })
    
 } catch (error) {
    res.status(500).json({
        message:"error"
    })
 }

}