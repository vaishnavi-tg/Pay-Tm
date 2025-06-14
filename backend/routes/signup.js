import { Router } from "express"
import zod from "zod"
import { User } from "../models/userModel.js"
import { JWT_SECRET } from "../config.js"
import jwt from "jsonwebtoken"
import { Account } from "../models/accountModel.js"

const signupRouter = Router()

const signupSchema = zod.object({
    username: zod.string().email(),
    firstname: zod.string(),
    lastname: zod.string(),
    password: zod.string()
})

signupRouter.post("/signup", async (req, res) => {
    const body = req.body
    const { success } = signupSchema.safeParse(req.body)
    if (!success) {
        return res.json({
            msg: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username
    })

    if (user) {
        return res.json({
            msg: "Email already taken / Incorrect inputs"
        })
    }
    
    const dbUser = await User.create(body)

    await Account.create({
        userId:dbUser._id,
        balance: 1 + Math.random() * 10000
    })

    const token = jwt.sign({
        userId: dbUser._id
    }, JWT_SECRET)
    res.json({
        msg: "User created successfully",
        token: token
    })
})

export { signupRouter }