const Team = `
  type Team {
    owner: User!
    members: [User!]!
    channels: [Channel!]!
  }

  type Mutation {
    createTeam(name: String!): Boolean!
  }
`;

export default Team;
