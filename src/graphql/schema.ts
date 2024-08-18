import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Sample {
    id: String!
    make: String!
    model: String!
    year: Int!
    color: String!
    mileage: Int!
    price: Float!
  }

  type Query {
    matches(sampleId: String!): [Sample!]! # sampleId is required, and it returns a list of Sample objects
  }
`;
