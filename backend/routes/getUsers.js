import { Router } from "express";
import {User} from "../models/userModel.js"

const getUsersRouter = Router()

getUsersRouter.get("/bulk", async (req, res) => {
    try {
        const filter = req.query.filter || "";

        const users = await User.find({
            $or: [
                { firstname: { $regex: filter, $options: "i" } }, // case-insensitive
                { lastname: { $regex: filter, $options: "i" } }
            ]
        });

        res.json({
            users: users.map(user => ({
                username: user.username,
                firstname: user.firstname,
                lastname: user.lastname,
                _id: user._id
            }))
        });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

export {getUsersRouter}