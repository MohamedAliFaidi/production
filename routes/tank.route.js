const express = require('express')
const router = express.Router()

const tanksController = require("../contollers/tank.controller")





router.get("/", tanksController.getTanks );
router.post("/", tanksController.newTank );




module.exports = router