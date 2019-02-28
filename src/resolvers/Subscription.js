function newLinkSubscription(_,args, context, info) {
    return context.prisma.$subscribe.link({ mutation_in: ['CREATED']}).node()
}

const newLink = {
    subscribe: newLinkSubscription,
    resolve: payload => payload
};

function newVoteSubscribe(_, args, context, info){
    return context.prisma.$subscribe.vote({mutation_in: ["CREATED"]}).node()
}

const newVote = {
    subscribe: newVoteSubscribe,
    resolve: payload => payload
};

module.exports = {
    newLink,
    newVote
};