// Importing mongoose
import mongoose from "mongoose";

// Creating a schema to hold data entered on a form
// formatted to hold unique names and number values for scores
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

// How the schema should be called
const Player = mongoose.model('player', playerSchema)

// Exporting the schema
export default Player