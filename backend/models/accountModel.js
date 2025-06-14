import {mongoose} from "mongoose"
import {User} from "./userModel.js"


const accountSchema = mongoose.Schema({
    UserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
})

const Account = mongoose.model("Account",accountSchema)

export {Account}