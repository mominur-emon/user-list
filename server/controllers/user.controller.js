const { v4: uuidv4 } = require("uuid");
const User = require("../models/user.model");

const createUser = async (req, res) => {
  try {
    const newUser = new User({
      id: uuidv4(),
      name: req.body.name,
      email: req.body.email,
      age: Number(req.body.age),
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const updateUser = await User.findOne({ id: req.params.id });
    updateUser.name = req.body.name;
    updateUser.email = req.body.email;
    updateUser.age = Number(req.body.age);
    await updateUser.save();
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ id: req.params.id });
    res.status(200).json({ message: "user is deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getAllUsers, createUser, updateUser, deleteUser };
