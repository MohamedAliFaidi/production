const express = require('express')
const router = express.Router()
 




router.post("/upload" , async (req,res)=>{
    try {
        console.log(req.body)
        res.status(200).json({message:'got your file'})
        
    } catch (error) {
        res.status(500).json({message:'gerrorr while uploading your file'})

        
    }
} )








module.exports = router