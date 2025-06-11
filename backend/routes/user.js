import { Router } from "express"
import { signupRouter } from "./signup"
import { signinRouter } from "./signin"
import { updateRouter } from "./update"
import { getUsersRouter } from "./getUsers"


const userRouter = Router()


userRouter.use("signup", signupRouter)
userRouter.use("signin", signinRouter)
userRouter.use("/",updateRouter)
userRouter.use("/bulk",getUsersRouter)





export { userRouter }