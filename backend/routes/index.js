import {Router} from "express"
import { userRouter } from "./user.js"
import { accountRouter } from "./account.js"

const rootRouter = Router()

app.use("/user",userRouter)
app.use("/account",accountRouter)

export {rootRouter}