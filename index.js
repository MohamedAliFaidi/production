const express = require("express");
const app = express();
const routes = require("./routes/tank.route")
const authRoutes = require("./routes/auth.route")
const privateRoute = require("./routes/private.route")
const adminRoute = require('./routes/admin.route')
const cors = require("cors")
app.use(express.json());

const cookieParser = require('cookie-parser')

app.use(cookieParser())


app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

const mongoose = require("mongoose");


const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("mongodb connected"))
  .catch(() => console.log("error connection the database"));






  app.use(routes);
  app.use(authRoutes);
  app.use(privateRoute)
  app.use(adminRoute)


  app.listen(3000,()=>{
    console.log("listening on port 3000")
})