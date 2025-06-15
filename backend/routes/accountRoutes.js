import { Router } from "express";
import { balanceRouter} from "../controllers/accountController.js";

const router = Router()

balanceRouter.get("/", balanceRouter)

// router.post("/transfer", transfer)

export default router