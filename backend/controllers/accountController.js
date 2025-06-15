import { Account } from "../models/accountModel.js"

const balance =  async (req, res) => {
  const account = await Account.findOne({ userId: req.userId });
    console.log(account)
    res.json({
        balance: account.balance
    })
}

export { balance }