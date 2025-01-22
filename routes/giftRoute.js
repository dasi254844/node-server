import { Router } from "express"
import { addGift, deleteGiftById, getAllGiftOutOfStock, getAllGifts, getGiftById, updateGift } from "../controllers/giftController.js"

const giftRoute = Router()

giftRoute.get("", getAllGifts)

giftRoute.get("/:id", getGiftById)

giftRoute.get("/Out_of_stock", getAllGiftOutOfStock)

giftRoute.delete("/:id", deleteGiftById)

giftRoute.post("", addGift)

giftRoute.put("/:id", updateGift)


export default giftRoute;
