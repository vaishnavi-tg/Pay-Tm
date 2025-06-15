import express from "express"
import userRouter from "./routes/userRoutes.js"
import accountRouter from "./routes/accountRoutes.js"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/user", userRouter)

app.use("/api/v1/account", accountRouter)

export default app