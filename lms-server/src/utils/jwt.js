import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

export const createAccessToken = (payload) => {
  return jwt.sign(payload, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn,
  });
};

export const decodeAccessToken = (token) => {
  return jwt.verify(token, config.jwt.secret);
};
