const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users, thoughts } = require('./data')

connection.on('error', (err) => err);

connection.once('open', async() => {
    console.log('connected to server');

    // delete existing users and thoughts
    await User.deleteMany({});
    await Thought.deleteMany({});

    // add users and thoughts to db
    await User.insertMany(users);
    await Thought.insertMany(thoughts);

    console.table(users);
    console.info('Seeded');
    process.exit(0);
})