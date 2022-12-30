import { combineResolvers, resolverType } from "fast-graphql";

import review from "./content-generators";
// TODO: remove the resolvers we dont need and make a new one that can be used in a hook
const resolvers: resolverType[] = [review];

const cominedResolvers = combineResolvers({ resolvers });

export default cominedResolvers;
