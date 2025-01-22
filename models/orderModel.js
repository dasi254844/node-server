import { Schema, model } from "mongoose"
import USERS from "./userModel.js"
import GIFTS from "./giftModel.js"
//סכמה קטנה של מוצר
const minimalGIFTSchema = Schema({
    name: { type: String, required: true },
    price: Number,
    text: String,
    id_gift_in_GIFTS: { type: Schema.Types.ObjectId, ref: GIFTS, required: true },
    formatText: { type: String, enum: ['format1', 'format2', 'format3'] }
})

const orderSchema = Schema({
    date_order: { type: Date, default: Date.now },
    id_user: { type: Schema.Types.ObjectId, ref: USERS, required: true },
    products: { type: minimalGIFTSchema, required: true },
    is_sending: { type: Boolean, default: false },
    target_date: {
        type: Date, default: () => {
            const today = new Date();
            today.setDate(today.getDate() + 5);
            return today;
        }
    },
    address_target: { type: String, pattern: /^[א-ת]{2,},\s*[א-ת\s]+ \d+(\/\d+)?$/ },
    is_received: { type: Boolean, default: false },
    price_sending: { type: Number, default: 0 },
    Greeting: { text: String, background_page: { type: String, enum: [1, 2, 3, 4, 5] } },
    quantity: { type: Number, required: true }
})
orderSchema.virtual('final_price').get(function () {
    return this.price_sending + this.products.price;
});
const orderModel = model("order", orderSchema);

export default orderModel;
