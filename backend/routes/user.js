import { Router } from "express"
import { signupRouter } from "./signup"
import { signinRouter } from "./signin"


const userRouter = Router()

userRouter.use("signup", signupRouter)
userRouter.use("signin", signinRouter)


export { userRouter }