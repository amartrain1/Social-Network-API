const { User, Thought } = require('../models');

module.exports = {
    // Get all users
    async findUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err)
        };
    },
    // Get one user
    async findOneUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .select('-__v')
                .populate('friends')
                .populate('thoughts');
            if (!user) {
                return res.status(404).json({ message: 'No corresponding user with that id'});
            }
            res.status(500).json(err)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // Post a new user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // Update a user
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { new: true }
            )
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // Delete a user
    async removeUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });
            if (!user) {
                return res.status(404).json({ message: 'No corresponding user with that id'});
            }
            res.json(`user ${user.username} deleted`)
        } catch (err) {
            res.status(500).json(err)
        }
    }
};