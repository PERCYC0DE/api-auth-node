import User from "../models/User";

export const createUser = (req, res) => {
  res.json("User created");
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().populate();
    res.json("Show all users");
  } catch (error) {
    console.log(error);
  }
};
