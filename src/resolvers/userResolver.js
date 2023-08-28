const User = require("../models/User");

const userResolver = {
  Query: {
    users() {
      return User.find();
    },
    user(_, { id }) {
      return User.findById(id)
    },
  },
  Mutation: {
    createUser: async (_, { user }) => {
      const newUser = new User(user);
      await newUser.save();
      return newUser;
    },
    updateUser(_, { id, user }) {
       return User.findByIdAndUpdate(id, user, {
          new: true,
          useFindAndModify: false,
       });
    },
    deleteUser(_, { id }) {
       return User.findByIdAndRemove(id, {
          useFindAndModify: false,
       });
    },
  },
}

module.exports = userResolver;