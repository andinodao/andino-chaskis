import { combineResolvers, resolverType } from 'fast-graphql'

import generators from './content-generators'
// TODO: remove the resolvers we dont need and make a new one that can be used in a hook
const resolvers: resolverType[] = [generators]

const cominedResolvers = combineResolvers({ resolvers })

export default cominedResolvers
