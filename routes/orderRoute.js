import {Router} from "express"
import { getAllOrders, getOrderById ,getAllOrdersInDate, getOrdersFromUserById ,deleteOrder,addOrder,updateOrder, sendingOrderUpdate} from "../controllers/orderController.js"

const orderRoute = Router();


orderRoute.get("", getAllOrders);

orderRoute.get("/get/:id", getOrderById);

orderRoute.get("/get_target_date/:date", getAllOrdersInDate);

orderRoute.get("/get_user/:id", getOrdersFromUserById);

orderRoute.delete("/:id", deleteOrder);

orderRoute.post("",addOrder);

orderRoute.put("/update/:id", updateOrder);

orderRoute.put("/update_sending/:id", sendingOrderUpdate);


export default orderRoute;
