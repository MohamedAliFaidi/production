const Tank = require("../models/tank.model");

const getTanks = async (req, res) => {
  try {
    const tanks = await Tank.find();
    res.status(200).json({ data: tanks });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};

const newTank = async (req, res) => {
  try {
    console.log(req.body);
    const newTank = await Tank.create(req.body);

    res.status(201).json({ data: newTank });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};

module.exports = { getTanks, newTank };
