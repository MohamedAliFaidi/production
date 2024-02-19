const express = require('express')
const router = express.Router()


 




router.get("/private_nav" , require("../middleware").checkAuth)

router.post("/update/:id" , require("../middleware").checkAuth, require("../contollers/user.controller").updateUser)









module.exports = router