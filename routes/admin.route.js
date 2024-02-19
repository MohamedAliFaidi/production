const express = require('express')
const router = express.Router()





router.get("/admin/admintest" , require("../middleware").checkAdmin , require("../contollers/admin.controller").testAdmin )
router.get("/isadmin" , require("../middleware").checkAdmin  ,require("../contollers/admin.controller").checkAdmin )









module.exports = router