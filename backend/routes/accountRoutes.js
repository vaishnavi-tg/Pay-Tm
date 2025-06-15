import { Router } from "express";
import { balance, transfer } from "../controllers/accountController.js";
import { authMiddleware } from "../middleware.js";

const router = Router()

router.get("/balance", authMiddleware, balance)

router.post("/transfer", authMiddleware, transfer)

export default router