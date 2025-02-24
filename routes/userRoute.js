import {Router} from "express"
import {addUserSignUp, getAllUsers, getUserByID, getUserByLogin, updatePassword, updateUser, getTotalUserPages} from "../controllers/userController.js"

const userRoute = Router()

userRoute.get("",getAllUsers)

userRoute.get("/numPages", getTotalUserPages)

userRoute.get("/:id", getUserByID)

userRoute.post("/login",getUserByLogin)

userRoute.post("",addUserSignUp)

userRoute.put("/update_password/:id",updatePassword)

userRoute.put("/:id", updateUser)


export default userRoute;
