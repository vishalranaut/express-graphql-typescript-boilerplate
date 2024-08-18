import { ApolloServer } from "apollo-server-express";
import express from "express";
import { typeDefs, resolvers } from "./graphql";
import routes from "./routes";

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

(async () => {
  await server.start();
  server.applyMiddleware({ app });

  routes(app);

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
})();
