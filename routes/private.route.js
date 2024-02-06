const express = require('express')
const router = express.Router()
 




router.get("/private" , require("../middleware").checkAuth , require("../contollers/private.controller") )








module.exports = router