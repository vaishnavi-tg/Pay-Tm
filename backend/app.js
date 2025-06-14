import express from "express"
import userRouter from "./routes/userRoutes.js"

const app = express()

app.use("/api/v1/user",userRouter)

export default app