function postedBy(_, args, context) {
    return context.prisma.link({ id: _.id}).postedBy()
}

function votes(_, args, context){
    return context.prisma.link({ id: _.id }).votes()
}

module.exports = {
    postedBy,
    votes,
};