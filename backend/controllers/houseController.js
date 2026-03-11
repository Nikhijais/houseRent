const House = require("../models/house");

exports.getHouses = async (req, res) => {
    const houses = await House.find();
    res.json(houses);
};

exports.addHouse = async (req, res) => {
    const house = new House(req.body);
    await house.save();
    res.json(house);
};