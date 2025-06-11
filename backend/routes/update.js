import { Router } from "express"
import zod from "zod"
import { authMiddleware } from "../middleware.js"
import {User} from "../models/userModel.js"

const updateRouter = Router()

const updateBody = zod.object({
    username: zod.string().optional(),
    firstname: zod.string().optional(),
    lastname: zod.string().optional()
})

updateRouter.post("/",authMiddleware,async(req,res)=>{
    const {success} = updateBody.safeParse(req.body)

    if(!success){
        return res.status(411).json({
            msg:"Error while updating the information"
        })
    }

    await User.updateOne({ _id: req.userId }, req.body)

    res.json({
        message : "Updated successfully"
    })
})

export { updateRouter }