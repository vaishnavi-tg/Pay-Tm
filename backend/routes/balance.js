import { Router } from "express";
import { authMiddelware } from "../middleware";

const balanceRouter =Router()

balanceRouter.get("/balance",authMiddelware, async(req,res)=>{
    const account = await User.findOne({
        userId:req.userId
    })
    res.json({
        balance:account.balance
    })
})

export {balanceRouter}