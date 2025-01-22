import {Router} from "express"
import {addUserSignUp, getAllUsers, getUserByID, getUserByLogin, updatePassword, updateUser} from "../controllers/userController.js"

const userRoute = Router()

userRoute.get("/api",getAllUsers)

userRoute.get("/api/:id", getUserByID)

userRoute.get("/api-login",getUserByLogin)

userRoute.post("/api",addUserSignUp)

userRoute.put("/api/:id", updateUser)

userRoute.put("/api-password/:id",updatePassword)

export default userRoute;