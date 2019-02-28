function links(_, args, context, info) {
    return context.prisma.user({id: _.id}).links()
}

module.exports = {
    links
};