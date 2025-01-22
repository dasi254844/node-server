import { Router } from "express"
import { addUserSignUp, getAllUsers, getUserByID, getUserByLogin, updatePassword, updateUser } from "../controllers/userController.js"

const userRoute = Router()

userRoute.get("", getAllUsers)

userRoute.get(":id", getUserByID)

userRoute.get("login", getUserByLogin)

userRoute.post("", addUserSignUp)

userRoute.put(":id", updateUser)

userRoute.put("password/:id", updatePassword)

export default userRoute;
