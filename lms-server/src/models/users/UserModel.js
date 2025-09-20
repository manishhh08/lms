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
//create or register new user by admin
export const createUserByAdmin = (userObj) => {
  return User.insertOne(userObj);
};

//update user by ID
export const updateUserById = (_id, userObj) => {
  return User.findByIdAndUpdate(_id, userObj, { new: true });
};

//remove user by id
export const removeUserById = (_id) => {
  return User.findByIdAndDelete(_id);
};
//keep only 5 latest access token
export const pushAccessToken = (id, accessToken) => {
  return User.findByIdAndUpdate(
    id,
    {
      $push: {
        accessToken: {
          $each: [accessToken],
          $slice: -5, // keep only last 5 tokens
        },
      },
    },
    { new: true }
  );
};
