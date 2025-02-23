import {Router} from "express"
import { addGift, deleteGiftById, getAllGiftOutOfStock, getAllGifts, getGiftById, updateGift } from "../controllers/giftController.js"

const giftRoute = Router()

giftRoute.get("",getAllGifts)


giftRoute.get("/get/:id", getGiftById)

giftRoute.get("/get_out_of_stock", getAllGiftOutOfStock)

giftRoute.delete("/:id", deleteGiftById)

giftRoute.post("",addGift)

giftRoute.put("/:id", updateGift)

export default giftRoute;

