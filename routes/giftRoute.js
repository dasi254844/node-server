import {Router} from "express"
import { addGift, deleteGiftById, getAllGiftOutOfStock, getAllGifts, getGiftById, updateGift ,getAllGiftsIsInCondition, updateQuantityInStock} from "../controllers/giftController.js"

const giftRoute = Router()

giftRoute.get("/api",getAllGifts)

giftRoute.get("/api/:id", getGiftById)

giftRoute.get("/api-Out_of_stock",getAllGiftOutOfStock)

giftRoute.get("/api-condition/:condition", getAllGiftsIsInCondition)

giftRoute.delete("/api/:id", deleteGiftById)

giftRoute.post("/api",addGift)

giftRoute.put("/api/:id", updateGift)

giftRoute.put("/api-update_stock/:id", updateQuantityInStock)


export default giftRoute;