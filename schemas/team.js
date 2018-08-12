import User from './user';
import Channel from './channel';

const Team = `
  type Team {
    owner: User!
    members: [User!]!
    channels: [Channel!]!
  }
`;

export default () => [Team, User, Channel];
