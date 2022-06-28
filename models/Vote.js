const { Schema, model } = require('mongoose');

const voteSchema = new Schema(
    {
        userId: {
            type:String,
            unique:true,
        },
        imdb_id: {
            type: String,
            unique:true,
        },
        vote: {
            type:Number
        }
    }
);
const Vote = model('Vote', voteSchema);

module.exports = Vote;