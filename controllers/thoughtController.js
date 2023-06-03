const { User, Thought } = require('../models');

module.exports = {
    // Get all thoughts
    async findThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // get one thought
    async findOneThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId });
            if (!thought) {
                return res.status(404).json({ message: 'No corresponding thought with that id' });
            }
            res.json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // Post a new thought
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body)
        //! req.body example
          /*{
                "thoughtText": "thought test here",
                "username": "username here",
                "userId": "id here"
            }*/
            res.json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // Update a thought
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { new: true }
            )
            res.json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // Delete a thought
    async removeThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId })
            if (!thought) {
                return res.status(404).json({ message: 'No corresponding thought with that id' })
            }
            res.json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    }
};