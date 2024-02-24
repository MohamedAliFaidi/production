const jwt = require("jsonwebtoken");

async function checkAdmin(req, res, next) {
  try {
    const token = req.headers.cookie.split("=")[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (decoded && decoded["role"] != "admin") {
      return res.status(401).json({ message: "action reserved to admin only" });
    }
  } catch (error) {
    console.log(error, "here");
    return res.status(500).json({ error: error });
  }
  next();
}

function checkAuth(req, res, next) {
  try {
    if (!req.headers.cookie) {
      return res.status(401).json({ message: "unauthorized access detected" });
    }
    const token = req.headers.cookie.split("=")[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (decoded && decoded.exp < Date.now()) {
      res.clearCookie("Authorization");
      return res
        .status(400)
        .json({ isAuth: false, message: "session expired please login" });
    }

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
}

module.exports = {
  checkAdmin,
  checkAuth,
};
