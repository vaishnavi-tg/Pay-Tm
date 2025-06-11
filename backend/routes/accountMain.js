import {Router} from "express"
import { balanceRouter } from "./balance.js"
import {transferRouter} from "./transfer.js"

const accountRouter = Router()

accountRouter.use("/balance",balanceRouter)
accountRouter.use("/transfer",transferRouter)

export {accountRouter}