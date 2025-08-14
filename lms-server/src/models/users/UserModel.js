import User from "./UserSchema.js";

//get all users
export const getAllUsers = () => {
  return User.find();
};

//get user by ID
export const getUserById = (id) => {
  return User.findById(id);
};

//get user by email filter
export const getUser = (filter) => {
  return User.findOne(filter);
};

//create or register new user
export const createUser = (userObj) => {
  return User.insertOne(userObj);
};

//update user by ID
export const updateUserById = (id, userObj) => {
  return User.findByIdAndUpdate(id, userObj);
};
