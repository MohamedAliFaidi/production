const express = require('express')
const router = express.Router()
 




router.get("/private" , require("../middleware").checkAuth  )








module.exports = router