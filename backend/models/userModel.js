import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
        trim: true,
        lowercase: true,
        unique: true
    },
    firstname: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50
    },
    lastname: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 15,
    },
})

const User = mongoose.model("User", userSchema)

export { User }