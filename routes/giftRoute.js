import {Router} from "express"
import { addGift, deleteGiftById, getAllGiftOutOfStock, getAllGifts, getGiftById, updateGift ,getTotalGiftPages} from "../controllers/giftController.js"

const giftRoute = Router()

giftRoute.get("",getAllGifts)

giftRoute.get("/numPages", getTotalGiftPages)

giftRoute.get("/get_out_of_stock", getAllGiftOutOfStock)

giftRoute.get("/:id", getGiftById)

giftRoute.delete("/:id", deleteGiftById)

giftRoute.post("",addGift)

giftRoute.put("/:id", updateGift)

export default giftRoute;

