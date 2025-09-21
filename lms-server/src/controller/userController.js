import {
  countTotalAdmins,
  createUserByAdmin,
  getAllUsers,
  getUserById,
  removeUserById,
  updateUserById,
} from "../models/users/UserModel.js";
import { encodeFunction } from "../utils/encodehelper.js";

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

export const updateRoleController = async (req, res, next) => {
  try {
    //id
    let id = req.params.id;
    let { role } = req.body;
    const user = await getUserById(id);
    if (!user) {
      return res.json({
        status: "error",
        message: "User not found",
      });
    }

    //function to prevent last admin from removing themself
    if (user?.role === "admin" && role !== "admin") {
      const adminCount = await countTotalAdmins({ role: "admin" });
      if (adminCount <= 1) {
        return res.json({
          status: "error",
          message:
            "You are the last admin. Atleast one admin is required for the system.",
        });
      }
    }
    // update role
    let userUpdate = await updateUserById(id, { role }, { new: true });

    return res.json({
      status: "success",
      message: "User Role Updated Successfully",
      user: userUpdate,
    });
  } catch (err) {
    console.log(err);
    let message = "User Role Update Failed!";
    let statusCode = 500;
    if (err.message.includes("E11000")) {
      message = message + err.message;
      statusCode = 400;
    }
    return res.status(statusCode).json({
      status: "error",
      message,
    });
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await getUserById(id);
    if (!user) {
      return res.json({
        status: "error",
        message: "User not found",
      });
    }

    //function to prevent last admin from removing themself
    if (user?.role === "admin" && role !== "admin") {
      const adminCount = await countTotalAdmins({ role: "admin" });
      if (adminCount <= 1) {
        return res.json({
          status: "error",
          message:
            "You are the last admin. Atleast one admin is required for the system.",
        });
      }
    }

    const deletedUser = await removeUserById(id);

    if (!deletedUser) {
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }
    const users = await getAllUsers();
    return res.json({
      status: "success",
      message: "User deleted successfully",
      users,
    });
  } catch (err) {
    console.log(err);
    let message = "User Delete Failed!";
    let statusCode = 500;
    if (err.message.includes("E11000")) {
      message = message + err.message;
      statusCode = 400;
    }
    return res.status(statusCode).json({
      status: "error",
      message,
    });
  }
};

export const createNewUser = async (req, res, next) => {
  try {
    const userObj = req.body;

    const newUser = await createUserByAdmin(userObj);
    if (!newUser) {
      return res.status(404).json({
        status: "error",
        message: "User creation failed",
      });
    } else {
      return res.json({
        staus: "success",
        message:
          "User creation successful. Activate account by verification sent to your email.",
        data: newUser,
      });
    }
  } catch (err) {
    let message = "User creation failed!";
    let statusCode = 500;
    if (err.message.includes("E11000")) {
      message = message + err.message;
      statusCode = 400;
    }
    return res.status(statusCode).json({
      status: "error",
      message,
    });
  }
};

export const updateUserDetail = async (req, res, next) => {
  try {
    let id = req.params.id;
    let userObj = req.body;

    const user = await getUserById(id);
    if (!user) {
      return res.json({
        status: "error",
        message: "User not found",
      });
    }

    //hash password
    if (userObj.password) {
      userObj.password = encodeFunction(userObj.password);
    }
    const userUpdateDetail = await updateUserById(id, userObj, { new: true });

    if (userUpdateDetail) {
      return res.json({
        status: "success",
        message: "User detail updated successfully",
        userUpdateDetail,
      });
    } else {
      return res.json({
        status: "error",
        message: "User detail could not be updated. Please try again.",
      });
    }
  } catch (err) {
    res.json({
      status: "error",
      message: err,
    });
  }
};
