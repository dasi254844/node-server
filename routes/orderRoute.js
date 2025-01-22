import {Router} from "express"
import { getAllOrders, getOrderById ,getAllOrdersInDate, getOrdersFromUserById ,deleteOrder,addOrder,updateOrder, sendingOrderUpdate} from "../controllers/orderController.js"

const orderRoute = Router();

orderRoute.get("/api",getAllOrders);

orderRoute.get("/api/:id",getOrderById);

orderRoute.get("/api-target_date/:date",getAllOrdersInDate);

orderRoute.get("/api-user/:id",getOrdersFromUserById);

orderRoute.delete("/api/:id",deleteOrder);

orderRoute.post("/api",addOrder);

orderRoute.put("/api/:id",updateOrder);

orderRoute.put("/api-sending/:id",sendingOrderUpdate);

export default orderRoute;
