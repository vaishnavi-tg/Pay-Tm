import { Router } from "express"
import { signupRouter } from "./signup.js"
import { signinRouter } from "./signin.js"
import { updateRouter } from "./update.js"
import { getUsersRouter } from "./getUsers.js"


const userRouter = Router()


userRouter.use("signup", signupRouter)
userRouter.use("signin", signinRouter)
userRouter.use("/",updateRouter)
userRouter.use("/bulk",getUsersRouter)





export { userRouter }