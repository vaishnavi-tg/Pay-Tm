import { Router } from "express";
import { authMiddleware } from "../middleware";

const balanceRouter =Router()

balanceRouter.get("/balance",authMiddleware, async(req,res)=>{
    const account = await User.findOne({
        userId:req.userId
    })
    res.json({
        balance:account.balance
    })
})

export {balanceRouter}