const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')
const cors = require("cors")
const dotenv = require("dotenv");
const routes = require("./routes/tank.route")
const authRoutes = require("./routes/auth.route")
const userRoute = require("./routes/user.route")
const adminRoute = require('./routes/admin.route')

dotenv.config();

const app = express();
app.use(express.json({ limit: '35mb' }));
app.use(cookieParser())
app.use(express.urlencoded({
  extended: true,
  limit: '35mb',
  parameterLimit: 50000,
}),)
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));



mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("mongodb connected"))
  .catch(() => console.log("error connection the database"));






app.use(routes);
app.use(authRoutes);
app.use("/user",userRoute)
app.use(adminRoute);



app.listen(3000, () => {
  console.log("listening on port 3000")
})