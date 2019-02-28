function link(_, args, context) {
    return context.prisma.vote({ id: _.id }).link()
}

function user(_, args, context) {
    return context.prisma.vote({ id: _.id }).user()
}

module.exports = {
    link,
    user
};