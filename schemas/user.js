import Team from './team';

const User = `
  type User {
    id: Int!
    username: String!
    email: String!
    teams: [Team!]!
  }
`;

export default () => [User, Team];
