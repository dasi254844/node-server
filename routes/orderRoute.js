import {Router} from "express"
import { getAllOrders, getOrderById ,getAllOrdersInDate, getOrdersFromUserById ,deleteOrder,addOrder,updateOrder, sendingOrderUpdate, getTotalOrderPages} from "../controllers/orderController.js"
import { checkUser } from "../middleware/check.js";

const orderRoute = Router();

orderRoute.get("", getAllOrders);

orderRoute.get("/numPages", getTotalOrderPages)

orderRoute.get("/target_date/:date", getAllOrdersInDate);

orderRoute.get("/get_from_user/:id",checkUser, getOrdersFromUserById);

orderRoute.get("/:id",checkUser, getOrderById);

orderRoute.delete("/:id",checkUser, deleteOrder);

orderRoute.post("",addOrder,addOrder);

orderRoute.put("/update_sending/:id", sendingOrderUpdate);

orderRoute.put("/:id",checkUser, updateOrder);


export default orderRoute;
