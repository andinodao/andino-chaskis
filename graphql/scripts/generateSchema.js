// eslint-disable-next-line @typescript-eslint/no-var-requires
const { generateSchema } = require('fast-graphql')

const inputPath = './graphql/typeDefs/**/**.gql'
const schemaPath = './graphql/generated/schema.graphql'
const typeDefsPath = './graphql/generated/types.ts'

generateSchema({ inputPath, schemaPath, typeDefsPath })
