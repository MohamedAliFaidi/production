const express = require("express");
const router = express.Router();

router.get("/isadmin", require("../contollers/admin.controller").checkAdmin);
router.get("/admintest", require("../contollers/admin.controller").testAdmin);

module.exports = router;
