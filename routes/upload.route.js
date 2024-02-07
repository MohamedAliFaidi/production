const express = require('express')
const router = express.Router()
const dotenv = require("dotenv");

dotenv.config();

const cloudinary =require("cloudinary").v2
console.log(process.env.CLOUD_NAME)
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET,
    secure: true,
  });
  




router.post("/upload" , async (req,res)=>{
    try {

        const data = Object.keys(req.body)
       console.log(req.body.data)
        
        await  new Promise((resolve, reject) => {
            cloudinary.uploader.upload(
              req.body.data,
              { folder: "images", resource_type: "auto" },
              async function (error, result) {
                // console.log(error ,result)
                if (error) {
                  console.log("Upload error:", error);
                  reject(error);
  
                  
                }
                resolve(result);
                console.log(result)

                
            }
            );
        })
        
        res.status(200).json({data : result})
        
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'gerrorr while uploading your file'})

        
    }
} )








module.exports = router