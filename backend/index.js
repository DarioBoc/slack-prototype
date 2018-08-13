import { ApolloServer } from 'apollo-server';
import models from './models';
import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schemas')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    models,
    user: { id: 1 }
  },
});

models.sequelize.sync({ force: false }).then(() => {
  server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
});