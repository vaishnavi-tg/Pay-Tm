import mongoose, { connect } from "mongoose"

const dbConnect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Successfully connected to the database")
        
    } catch (error) {
        console.log("Error connecting to the database")
    }
}

export {dbConnect}