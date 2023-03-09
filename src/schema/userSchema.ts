import { gql } from 'apollo-server';

export const userSchema = gql`
  type Query {
    getUser: User
  }

  type Mutation {
    updateUser(message: String!): User
  }

  type User {
    id: ID!
    uid: String!, 
    first_name: String!
    last_name: String!
    username: String!
    email: String!
    message: String!
  }
`;
