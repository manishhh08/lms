import jwt from "jsonwebtoken";
import { getUser } from "../models/users/UserModel.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const accessToken = req.headers.authorization;

    let decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
    console.log("Return value", decoded);
    let user = await getUser({ email: decoded.email });

    if (user) {
      user.password = "";
      req.user = user;
      next();
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (err) {
    return res
      .status(401)
      .json({ message: "Unauthorized", error: err.message });
  }
};
