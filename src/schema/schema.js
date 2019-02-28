const typeDefs = `
type Query {
    info: String!
    feed: [Link!]!
    link(id: ID!): Link
}

type Mutation {
    createLink(url: String!, description: String!): Link!
    signup(email: String!, password: String!, name: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
    vote(linkId: ID!): Vote
}

type Subscription {
    newLink: Link
    newVote: Vote
}

type Link {
    id: ID!
    description: String!
    url: String!
    postedBy: User
    votes: [Vote!]!
}

type AuthPayload {
    token: String
    user: User
}

type User {
    id: ID!
    name: String!
    email: String!
    links: [Link!]!
}

type Vote {
    id: ID!
    link: Link!
    user: User!
}
`;

module.exports = typeDefs;