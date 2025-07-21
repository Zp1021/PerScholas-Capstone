import mongoose from "mongoose";

async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('MongoDB connected')
    } catch (error) {
        console.log(e)
    }
}

export default connectDb