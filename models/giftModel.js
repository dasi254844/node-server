import { Schema, model } from "mongoose"

const giftSchema = Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    image_url: { type: String },
    is_add_text: { type: Boolean, default: false },
    the_gift_collection: { type: [String], required: true },
    quantity_in_stock: { type: Number, required: true }
})

const giftModel = model("gift box", giftSchema);

export default giftModel;