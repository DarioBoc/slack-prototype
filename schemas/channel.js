import Message from './message';
import User from './user';

const Channel = `
  type Channel {
    id: Int!
    name: String!
    public: Boolean!
    messages: [Message!]!
    users: [User!]!
  }
`

export default () => [Channel, Message, User];