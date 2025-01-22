import { Router } from "express"
import { getAllOrders, getOrderById, getAllOrdersInDate, getOrdersFromUserById, deleteOrder, addOrder, updateOrder, sendingOrderUpdate } from "../controllers/orderController.js"

const orderRoute = Router();

orderRoute.get("", getAllOrders);

orderRoute.get("/:id", getOrderById);

orderRoute.get("target_date/:date", getAllOrdersInDate);

orderRoute.get("user/:id", getOrdersFromUserById);

orderRoute.delete("/:id", deleteOrder);

orderRoute.post("", addOrder);

orderRoute.put("/:id", updateOrder);

orderRoute.put("sending/:id", sendingOrderUpdate);


export default orderRoute;
