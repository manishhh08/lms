import {
  createUserByAdmin,
  getAllUsers,
  removeUserById,
  updateUserById,
} from "../models/users/UserModel.js";

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
    // update role
    let user = await updateUserById(id, req.body, { new: true });

    return res.json({
      status: "success",
      message: "User Role Updated Successfully",
      user,
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

    const deletedUser = await removeUserById(id);

    if (!deletedUser) {
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }

    return res.json({
      status: "success",
      message: "User deleted successfully",
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
