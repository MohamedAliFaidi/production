const dotenv = require("dotenv");
const User = require("../models/user.model");

const check = async function (req, res) {
  try {
    const user = await User.findById(decoded.id);
    res.status(200).json({
      _id: user._id,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    res.clearCookie("Authorization")
    res.status(500).json({ error: error });
  }
};

dotenv.config();

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
  secure: true,
});

const updateUser = async (req, res) => {
  try {
    await new Promise((resolve, reject) => {
      cloudinary.uploader.upload(
        req.body.data,
        { folder: "avatars", resource_type: "auto" },
        async function (error, result) {
          if (error) {
            console.log(error);
            reject(error);
          }
          resolve(result);
          await User.findByIdAndUpdate(req.params.id, {
            avatar: {
              public_id: result.public_id,
              url: result.secure_url,
            },
          });
        }
      );
    });

    res.status(200).json({ message: "updated with success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "gerrorr while uploading your file" });
  }
};


module.exports = {
  updateUser,
  check
};
