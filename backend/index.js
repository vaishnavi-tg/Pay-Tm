import app from "./app.js"
import {config} from "dotenv"
import { dbConnect } from "./db/index.js"
import { rootRouter } from "./routes/index.js"
import cors from "cors"
import express from "express"

config()

app.use(cors())
app.use(express.json())


try {
    app.listen(process.env.PORT,()=>{
        dbConnect()
        console.log(`App Listening on port ${process.env.PORT}`)
    })
} catch (error) {
    console.log(error)
}

app.use("/api/v1",rootRouter)