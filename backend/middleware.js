import {JWT_SECRET} from "./config.js"
import jwt from "jsonwebtoken"
import {User} from "./models/userModel.js"


const authMiddleware = (req,res,next)=>{
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith("Bearer")){
        return res.status(403).json({})
    }

    const token = authHeader.split(' ')[1]

    try{
        const decoded = jwt.verify(token,JWT_SECRET)

        req.userId  = decoded.username

        next()
    }
    catch(err){
        return res.status(403).json({})
    }
}

export {authMiddleware}