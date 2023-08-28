const { gql } = require("apollo-server");

const mutation = gql`
   type Mutation {
      createUser(user: UserInput): User
      updateUser(id: String, user: UserInput): User
      deleteUser(id: String): User
   }

   input UserInput {
      index: String
      picture: String
      age: String
      eyeColor: String
      name: String
      company: String
      email: String
      phone: String
      friends: FriendsInput
      greeting: String
    }
  
    input FriendsInput {
      index: String
      picture: String
      age: String
      eyeColor: String
      name: String
      company: String
      email: String
      phone: String
    }
`;

module.exports = mutation;