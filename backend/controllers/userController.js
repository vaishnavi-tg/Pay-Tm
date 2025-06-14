import zod from "zod"
import { User } from "../models/userModel"

const signupSchema = zod.object({
    username: zod.string().email(),
    firstname: zod.string(),
    lastname: zod.string(),
    password: zod.string()
})
const signup = async (req, res) => {

    const body = req.body
    const { success } = signupSchema.safeParse(req.body)
    if (!success) {
        return res.json({
            msg: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username
    })

    if (user) {
        return res.json({
            msg: "Email already taken / Incorrect inputs"
        })
    }

    const dbUser = await User.create(body)

    await Account.create({
        userId: dbUser._id,
        balance: 1 + Math.random() * 10000
    })

    const token = jwt.sign({
        userId: dbUser._id
    }, JWT_SECRET)
    res.json({
        msg: "User created successfully",
        token: token
    })
}

const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string()
})

const signin = async (req, res) => {
    const body = req.body
    const { success } = signinSchema.safeParse(body)

    if (!success) {
        return res.status(411).json({
            msg: "Your inputs are wrong"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET)

        return res.json({
            token: token
        })
    }
    res.status(411).json({
        message: "Error while logging in"
    })

}

const updateBody = zod.object({
    username: zod.string().optional(),
    firstname: zod.string().optional(),
    lastname: zod.string().optional()
})

const updateUser = async (authMiddleware, req, res) => {
    const { success } = updateBody.safeParse(req.body)

    if (!success) {
        return res.status(411).json({
            msg: "Error while updating the information"
        })
    }

    await User.updateOne({ _id: req.userId }, req.body)

    res.json({
        message: "Updated successfully"
    })
}

const getUsers = async (req, res) => {
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
}



export { signup, signin, updateUser, getUsers }