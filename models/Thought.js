const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280,
        },
        createdAt: {
            // Gets the current date using built in Date function, and formats it to local time zone
            type: Date,
            default: Date.now,
            get: date => date.toLocalDateString(),
        },
        username: {
            type: String,
            required: true,
        }
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
    },
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;