import {Router} from "express"
import { balanceRouter } from "./balance.js"
import {transferRouter} from "./transfer.js"

const accountRouter = Router()

accountRouter.use("/",balanceRouter)
accountRouter.use("/",transferRouter)

export {accountRouter}