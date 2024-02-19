const testAdmin = async (req, res) => {
  try {
    res.status(200).json({
      message: " you reached the backen admin route ",
    });
  } catch (error) {
    console.log(error, "in controller");
    res.status(500).json({
      message: " error",
    });
  }
};

const checkAdmin = async (req, res) => {
  try {
    res.status(200).json({ message: "admin role exist" });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};

module.exports = {
  testAdmin,
  checkAdmin,
};
