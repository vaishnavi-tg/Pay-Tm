import {Router} from "express"
import zod from "zod"
import {User} from "../models/userModel.js"
import {JWT_SECRET} from "../config.js"
import jwt from "jsonwebtoken"

const signinRouter = Router()


const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string()
})

signinRouter.post("/signin", async (req, res) => {
    const body = req.body
    const { success } = signinSchema.safeParse(body)

    if (!success) {
        return res.status(411).json({
            msg: "Your inputs are wrong"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET)

        return res.json({
            token: token
        })
    }
    res.status(411).json({
        message: "Error while logging in"
    })

})

export{signinRouter}

