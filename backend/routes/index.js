import {Router} from "express"
import { userRouter } from "./user"

const rootRouter = Router()

app.use("/user",userRouter)

export {rootRouter}