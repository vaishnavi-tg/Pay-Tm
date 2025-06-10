import {Router} from "express"
import zod from "zod"
import {User} from "../db/index"
import JWT_SECRET from "./config"
import jwt from "jsonwebtoken"

const signupRouter = Router()


const signupSchema = zod.object({
    username : zod.string().email(),
    firstname :  zod.string(),
    lastname : zod.string(),
    password :zod.string()
})

Router.post("/signup",async (req,res)=>{
    const body = req.body
    const {success} = signupSchema.safeParse(req.body)
    if(!success){
        return res.json({
            msg:"Email already taken / Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username : req.body.username
    })

    if(user._id){
        return res.json({
            msg : "Email already taken / Incorrect inputs"
        })
    }
    const dbUser = await User.create(body)
    const token = jwt.sign({
        userId: dbUser._id
    },JWT_SECRET)
    res.json({
        msg:"User created successfully",
        token:token
    })
})

export {signupRouter}