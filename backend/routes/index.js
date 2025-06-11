import {Router} from "express"
import { userRouter } from "./userMain.js"
import { accountRouter } from "./accountMain.js"

const rootRouter = Router()

rootRouter.use("/user",userRouter)
rootRouter.use("/account",accountRouter)

export {rootRouter}