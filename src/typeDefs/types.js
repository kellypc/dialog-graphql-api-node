const { gql } = require("apollo-server");

const types = gql `
  type User {
    id: ID!
    index: String
    picture: String
    age: String
    eyeColor: String
    name: String
    company: String
    email: String
    phone: String
    friends: Friends
    greeting: String
  }

  type Friends {
    id: ID
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

module.exports = types;