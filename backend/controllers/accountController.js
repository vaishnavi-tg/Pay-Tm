import { Account } from "../models/accountModel.js"
import { Router } from "express"
import { authMiddleware } from "../middleware.js"

const balanceRouter = Router()

balanceRouter.get("/balance", authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        username: req.userId
    })
    res.json({
        balance: account.balance
    })
})

export { balanceRouter }