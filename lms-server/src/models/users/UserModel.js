import UserSchema from "./UserSchema.js";

//get all users
export const getAllUsers = () => {
  return UserSchema.find();
};

//get user by ID
export const getUserById = (id) => {
  return UserSchema.findById(id);
};

//get user by email filter
export const getUser = (email) => {
  return UserSchema.findOne({ email: email });
};

//create or register new user
export const createUser = (userObj) => {
  return UserSchema.insertOne(userObj);
};

//update user by ID
export const updateUserById = (id, userObj) => {
  return UserSchema.findByIdAndUpdate(id, userObj);
};
