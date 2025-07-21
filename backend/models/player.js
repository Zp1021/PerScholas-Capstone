import mongoose from "mongoose";

const playerSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    score: {
        type: Number,
        required: true
    }
})

const Player = mongoose.model('player', playerSchema)

export default Player