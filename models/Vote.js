const { Schema, model } = require('mongoose');

const voteSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        movieId: {
            type: Schema.Types.ObjectId,
            ref: "Movie",
        },
        vote: {
            type: Boolean,
        },
        ignore: {
            type: Boolean,
        }
    }
);

const Vote = model('Vote', voteSchema);

module.exports = Vote;