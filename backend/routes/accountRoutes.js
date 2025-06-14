import { Router } from "express";

const router = Router()

router.get("/balance",balance)
router.post("/transfer",transfer)

export default router