const express = require("express");
const router = express.Router();

router.get("/check", require("../contollers/user.controller").check);

router.post("/update/:id", require("../contollers/user.controller").updateUser);

module.exports = router;
