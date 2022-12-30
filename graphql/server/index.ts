import type { NextApiRequest, NextApiResponse } from "next";
import { ApolloServer } from "apollo-server-micro";
import { createContext } from "../context";

import typeDefs from "../generated/types";
import resolvers from "../resolvers";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: createContext,
});

const startServer = apolloServer.start();
console.log("this is happening");

export default async function graphqlServer({
  req,
  res,
  serverConfig = {},
}: {
  req: NextApiRequest;
  res: NextApiResponse;
  serverConfig?: any;
}) {
  console.log("this is happening");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}
