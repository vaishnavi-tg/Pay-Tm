import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        const dbConnection = await mongoose.connect(process.env.MONGO_URI).then(() => {
            console.log("Connected to Database")
        })
    } catch (error) {
        console.log(error)
    }
}

export default dbConnect