const express = require("express");
const compression = require("compression");

const app = express();
app.use(compression());
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./routes/routes");
const path = require("path");
const helmet = require("helmet");
app.use(helmet());
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: "deny" }));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
app.use(helmet.hsts({ maxAge: 90 * 24 * 60 * 60, force: true }));
app.use(helmet.dnsPrefetchControl());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
    },
  })
);

dotenv.config();

app.use(express.json({ limit: "35mb" }));
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
    limit: "35mb",
    parameterLimit: 50000,
  })
);
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("mongodb connected"))
  .catch(() => console.log("error connection the database"));

app.use("/api", routes);
app.use(express.static(path.join(__dirname, "react-rest/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "react-rest/dist", "index.html"));
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
