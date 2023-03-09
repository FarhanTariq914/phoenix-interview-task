import { ApolloServer } from 'apollo-server';
import { resolvers } from './src/resolvers';
import { userSchema } from './src/schema/userSchema';
import { fetchAndUpdateUser } from './src/services/fetchUser';
import { startScheduledUpdates } from './src/services/scheduleService';

async function startServer() {
  await fetchAndUpdateUser();
  startScheduledUpdates();

  const server = new ApolloServer({ typeDefs: userSchema, resolvers });

  server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
}

startServer();
