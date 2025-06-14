import { Router } from "express"
import { signupRouter } from "./signup.js"
import { signinRouter } from "./signin.js"
import { updateRouter } from "./update.js"
import { getUsersRouter } from "./getUsers.js"


const userRouter = Router()


userRouter.use("/", signupRouter)
userRouter.use("/", signinRouter)
userRouter.use("/",updateRouter)
userRouter.use("/",getUsersRouter)





export { userRouter }