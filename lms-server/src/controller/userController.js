import { getAllUsers } from "../models/users/UserModel.js";

export const getUserDetail = (req, res) => {
  res.send({
    status: "success",
    message: "User Detail Found",
    user: req.user,
  });
};

export const getAllUsersController = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json({
      status: "success",
      message: "Users retrieved successfully",
      users,
    });
  } catch (err) {
    res.json({
      status: "error",
      message: "Failed to retrieve users.",
    });
  }
};
