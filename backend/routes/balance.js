// import { Router } from "express";
// import { authMiddleware } from "../middleware.js";
// import {Account} from "../models/accountModel.js"
// import {User} from "../models/userModel.js"

// const balanceRouter =Router()

// balanceRouter.get("/balance",authMiddleware, async(req,res)=>{
    
//     const account = await User.findOne({
//         username : req.UserId
//     })
//     res.json({
//         balance:account.balance
//     })
// })

// export {balanceRouter}


import { Router } from "express";
import { authMiddleware } from "../middleware.js";
import { Account } from "../models/accountModel.js";
import { User } from "../models/userModel.js";

const balanceRouter = Router();

balanceRouter.get("/balance", authMiddleware, async (req, res) => {
    try {
        // Step 1: Find user by username
        const user = await User.findOne({ username: req.userId });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Step 2: Find account by user._id
        const account = await Account.findOne({ userId: user._id });

        if (!account) {
            return res.status(404).json({ error: "Account not found" });
        }

        // Step 3: Send balance
        res.json({
            balance: account.balance
        });
    } catch (err) {
        console.error("Balance fetch error:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

export { balanceRouter };
