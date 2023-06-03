const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            // Gets the current date using built in Date function, and formats it to local time zone
            type: Date,
            default: Date.now,
            get: date => date.toLocalDateString(),
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    },
);

module.exports = reactionSchema;