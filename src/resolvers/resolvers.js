const Query = require('../resolvers/Query');
const Mutation = require('../resolvers/Mutation');
const User = require('../resolvers/User');
const Link = require('../resolvers/Link');
const Subscription = require('../resolvers/Subscription');
const Vote = require('../resolvers/Vote');

const resolvers = {
    Query,
    Mutation,
    Subscription,
    User,
    Link,
    Vote
};

module.exports = resolvers;