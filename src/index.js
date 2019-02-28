const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');

const typeDefs = require('./schema/schema');
const resolvers = require('./resolvers/resolvers');

const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: request => {
        return {
            ...request,
            prisma
        }
    }
});
server.start(() => console.log('Server running on port 4000'));