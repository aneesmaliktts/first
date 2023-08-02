const User = require("../models/user.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
};
const getOneUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};
const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const result = await user.save();
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).send(); // no data
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
