import Channel from './channel';
import User from './user';

const Message = `
  type Message {
    id: Int!
    text: String!
    user: User!
    channel: Channel!
  }
`

export default () => [Message, User, Channel];