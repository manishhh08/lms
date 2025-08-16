import {
  createUser,
  getUser,
  updateUserById,
} from "../models/users/UserModel.js";
import { decodeFunction, encodeFunction } from "../utils/encodehelper.js";
import { createAccessToken, createRefreshToken } from "../utils/jwt.js";

export const registerUser = async (req, res) => {
  try {
    let userObj = req.body;

    userObj.password = encodeFunction(userObj.password);

    let newUser = await createUser(userObj);

    return res.status(201).json({
      status: "success",
      message: "User registered successfully",
    });
  } catch (err) {
    console.log(err);
    return res.json({
      status: "error",
      message: "Error registering user",
      //   error: err.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    // login user
    let { email, password } = req.body;

    // fetch user fro database
    let user = await getUser({ email });
    // if (!user?.status && !user?.isEmailVerified) {
    //   return res.status(401).json({
    //     status: false,
    //     message:
    //       "Your email is not verified or account is inactive, contact admin!",
    //   });
    // }

    if (user) {
      // user found then compare user.password -> db password

      let passwordMatch = decodeFunction(password, user.password);
      if (passwordMatch) {
        user.password = "";

        let payload = {
          email: user.email,
        };

        let accessToken = createAccessToken(payload);

        let refreshToken = createRefreshToken(payload);

        await updateUserById(user._id, {
          refreshToken,
          accessToken: [...user.accessToken, accessToken],
        });
        return res.status(200).json({
          status: "success",
          message: "Login Successful",
          accessToken,
          refreshToken,
        });
      } else {
        return res.status(401).json({
          status: "error",
          message: "User not authenticated!",
        });
      }
    } else {
      // user not found
      return res.status(401).json({
        status: "error",
        message: "The combination of email and password is incorrect!",
      });
    }
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      status: "error",
      message: "SERVER ERROR",
    });
  }
};

export const verifyEmail = async (req, res) => {
  try {
    let token = req.query.t;
    let email = req.query.email;

    let user = await getUser({ email: email });

    if (user) {
      // let updatedUSer = await updateUser(
      //   { email: email },
      //   { isEmailVerified: true }
      // );

      if (user.isEmailVerified) {
        return res.json({
          status: false,
          message: "User already verified",
        });
      }

      if (user.emailVerificationToken === token) {
        user.isEmailVerified = true;
        user.emailVerificationToken = "";
        await user.save();

        return res.json({
          status: true,
          message: "Verified",
        });
      } else {
        return res.json({
          status: false,
          message: "Email could not be verified",
        });
      }
    } else {
      return res.json({
        status: false,
        message: "User not found",
      });
    }
  } catch (err) {
    console.log(err.message);
    return res.json({
      status: false,
      message: "Verification Failed",
    });
  }
};
