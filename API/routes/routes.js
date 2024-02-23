const authRoutes = require("./auth.route");
const userRoute = require("./user.route");
const adminRoute = require("./admin.route");
const express = require("express");
const router = express.Router();

router.use("/auth", authRoutes);
router.use("/user", require("../middleware").checkAuth, userRoute);
router.use("/admin", require("../middleware").checkAdmin, adminRoute);

module.exports = router;
