import bcrypt from "bcrypt";

import { createUser } from "../models/users/UserModel.js";

export const registerUser = async (req, res) => {
  try {
    let userObj = req.body;

    let salt = bcrypt.genSaltSync(10);
    userObj.password = bcrypt.hashSync(userObj.password, salt);

    let newUser = await createUser(userObj);

    return res.status(201).json({
      status: true,
      message: "User registered successfully",
    });
  } catch (err) {
    console.log(err);
    return res.json({
      status: false,
      message: "Error registering user",
      //   error: err.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    // login user
    // let email = req.body.email;
    // let pasword = req.body.password;

    let { email, password } = req.body;

    // fetch user fro database
    let user = await getUser({ email: email });
    if (!user?.status && !user?.isEmailVerified) {
      return res.status(401).json({
        status: false,
        message:
          "Your email is not verified or account is inactive, contact admin!",
      });
    }

    if (user) {
      // user found
      // user.password -> db password
      // compare password with user.password
      let passwordMatch = bcrypt.compareSync(password, user.password);
      if (passwordMatch) {
        user.password = "";

        let payload = {
          email: user.email,
        };

        let accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
          // expiresIn: process.env.JWT_EXPIRES_IN,
          expiresIn: process.env.EXPIRES_IN,
        });

        return res.status(200).json({
          status: true,
          message: "Login Successful",
          user,
          accessToken,
        });
      } else {
        return res.status(401).json({
          status: false,
          message: "User not authenticated!",
        });
      }
    } else {
      // user not found
      return res.status(401).json({
        status: false,
        message: "The combination of email and password is incorrect!",
      });
    }
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      status: false,
      message: "SERVER ERROR",
    });
  }
};
