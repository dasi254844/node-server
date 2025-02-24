import {Router} from "express"
import { getAllOrders, getOrderById ,getAllOrdersInDate, getOrdersFromUserById ,deleteOrder,addOrder,updateOrder, sendingOrderUpdate, getTotalOrderPages} from "../controllers/orderController.js"

const orderRoute = Router();

orderRoute.get("", getAllOrders);

orderRoute.get("/numPages", getTotalOrderPages)

orderRoute.get("/target_date/:date", getAllOrdersInDate);

orderRoute.get("/get_from_user/:id", getOrdersFromUserById);

orderRoute.get("/:id", getOrderById);

orderRoute.delete("/:id", deleteOrder);

orderRoute.post("",addOrder);

orderRoute.put("/update_sending/:id", sendingOrderUpdate);

orderRoute.put("/:id", updateOrder);


export default orderRoute;
