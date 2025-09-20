import {
  createUser,
  createUserByAdmin,
  getUser,
  pushAccessToken,
  updateUserById,
} from "../models/users/UserModel.js";
import { sendEmailVerification } from "../utils/emailProcessor.js";
import { decodeFunction, encodeFunction } from "../utils/encodehelper.js";
import { createAccessToken, createRefreshToken } from "../utils/jwt.js";
import { v4 as uuidv4 } from "uuid";

export const registerUser = async (req, res) => {
  try {
    let userObj = req.body;

    userObj.password = encodeFunction(userObj.password);

    let newUser = await createUser(userObj);

    if (newUser._id) {
      // create unique token and store in db
      const emailVerificationToken = uuidv4();

      const result = await updateUserById(newUser._id, {
        emailVerificationToken,
      });

      // send email verification with token

      const url =
        process.env.APP_URL +
        `/verify-email?t=${emailVerificationToken}&email=${newUser.email}`;

      sendEmailVerification({
        to: newUser.email,
        url,
        userName: newUser.userName,
      });
    }
    return res.status(201).json({
      status: "success",
      message: "User registered successfully, please verify your email",
    });
  } catch (err) {
    console.log(err.message);
    if (err.message.includes("E11000")) {
      return res.status(400).json({
        status: false,
        message: "Invalid email or username",
      });
    } else {
      return res.status(500).json({
        status: false,
        message: "Server Error",
      });
    }
  }
};

export const loginUser = async (req, res) => {
  try {
    // login user
    let { email, password } = req.body;

    // fetch user fro database
    let user = await getUser({ email: email });
    if (!user?.status && !user?.isEmailVerified) {
      return res.status(401).json({
        status: "error",
        message:
          "Your email is not verified or account is inactive, contact admin!",
      });
    }

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

        // await updateUserById(user._id, {
        //   refreshToken,
        //   accessToken: [...user.accessToken, accessToken],
        // });
        await updateUserById(user._id, {
          refreshToken,
        });

        //keep only last 5 accesss token
        await pushAccessToken(user._id, accessToken);

        return res.status(200).json({
          status: "success",
          message: "Login Successful",
          accessToken,
          refreshToken,
        });
      } else {
        return res.status(401).json({
          status: "error",
          message: "Invalid login detail",
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
          status: "error",
          message: "User already verified",
        });
      }

      if (user.emailVerificationToken === token) {
        user.isEmailVerified = true;
        user.emailVerificationToken = "";
        await user.save();

        return res.json({
          status: "success",
          message: "Verified",
        });
      } else {
        return res.json({
          status: "error",
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

export const registerUserByAdmin = async (req, res) => {
  try {
    let userObj = req.body;

    userObj.password = encodeFunction(userObj.password);

    let newUser = await createUserByAdmin(userObj);

    if (newUser._id) {
      // create unique token and store in db
      const emailVerificationToken = uuidv4();

      const result = await updateUserById(newUser._id, {
        emailVerificationToken,
      });

      // send email verification with token

      const url =
        process.env.APP_URL +
        `/verify-email?t=${emailVerificationToken}&email=${newUser.email}`;

      sendEmailVerification({
        to: newUser.email,
        url,
        userName: newUser.userName,
      });
    }
    return res.status(201).json({
      status: "success",
      message: "User registered successfully, please verify your email",
    });
  } catch (err) {
    console.log(err.message);
    if (err.message.includes("E11000")) {
      return res.status(400).json({
        status: false,
        message: "Invalid email or username",
      });
    } else {
      return res.status(500).json({
        status: false,
        message: "Server Error",
      });
    }
  }
};
