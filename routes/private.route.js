const express = require('express')
const router = express.Router()
const checkAuth = require("../middleware")




router.get("/private" , checkAuth , require("../contollers/private.controller") )








module.exports = router