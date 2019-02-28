function feed(_, args, context, info) {
    return context.prisma.links();
}

module.exports = {
    feed,
};