import app from "./app.js"
import { config } from "dotenv"
import dbConnect from "./db/index.js"


config()

try {
    app.listen(process.env.PORT, () => {
        dbConnect()
        console.log(`Listening on port ${process.env.PORT}`)
    })

} catch (error) {
    console.log("Error connecting to server")
}