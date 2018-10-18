import bcrypt from 'bcrypt';

export default {
    Query: {
        getUser: (parent, { id }, { models }) => models.User.findOne({ where: { id } }),
        allUsers: (parent, args, { models }) => models.User.findAll(),
    },
    Mutation: {
        register: async (parent, args, { models }) => {
            try {
                args.password = await bcrypt.hash(args.password, 12);
                await models.User.create(args);

                return true;
            } catch (error) {
                return false;
            }
        },
    },
};