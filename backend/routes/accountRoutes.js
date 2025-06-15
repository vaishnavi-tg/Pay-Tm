import { Router } from "express";
import { balance } from "../controllers/accountController.js";
import { authMiddleware } from "../middleware.js";

const router = Router()

router.get("/balance", authMiddleware, balance)

router.post("/transfer", transfer)

export default router