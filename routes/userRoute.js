import {Router} from "express"
import {addUserSignUp, getAllUsers, getUserByID, getUserByLogin, updatePassword, updateUser} from "../controllers/userController.js"

const userRoute = Router()

userRoute.get("",getAllUsers)

userRoute.get("/get/:id", getUserByID)

userRoute.post("/login",getUserByLogin)

userRoute.post("",addUserSignUp)

userRoute.put("/update/:id", updateUser)

userRoute.put("/update_password/:id",updatePassword)


export default userRoute;
