import {Router} from "express"
import { balanceRouter } from "./balance"

const accountRouter = Router()

accountRouter.use("/balance",balanceRouter)

export {accountRouter}