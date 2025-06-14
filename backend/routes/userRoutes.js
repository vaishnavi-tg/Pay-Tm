import { Router } from "express";
import { signin, signup, updateUser, getUsers} from "../controllers/userController";

const router = Router()

router.post("/signup", signup)

router.post("/signin", signin)

router.post("/update",updateUser)

router.get("/bulk",getUsers)

export default router


