import GIFTS from "../models/giftModel.js";

//קבלת כל המוצרים
export const getAllGifts = async (req, res) => {
    let data = await GIFTS.find();
    try {
        if (!data)
            return res.status(404).json({ title: "cannot get all", message: "not found gifts" });
        res.json(data);
    }
    catch (err) {
        return res.status(400).json({ title: "cannot get all", message: err.message });
    }
}

//id קבלת מוצר לפי 
export const getGiftById = async (req, res) => {
    let { id } = req.params;
    let data = await GIFTS.findById(id);
    try {
        if (!data)
            return res.status(404).json({ title: "cannot get by id", message: "id not found" });
        res.json(data)
    }
    catch (err) {
        return res.status(400).json({ title: "cannot get by id", message: err.message });
    }
}

//id מחיקת מוצר לפי  
export const deleteGiftById = async (req, res) => {
    let { id } = req.params;
    let data = await GIFTS.findByIdAndDelete(id);
    try {
        if (!data)
            return res.status(404).json({ title: "cannot delete by id", message: "id is not exists" });
        res.json(data);
    }
    catch (err) {
        return res.status(400).json({ title: "cannot delete by id", message: err.message });
    }
}
export const addGift = async (req, res) => {
    let body = req.body;
    //בדיקות תקינות:
    //required האם נשלחו כל המאפיינים שהם 
    if (!body.name || !body.price || !body.the_gift_collection || !body.quantity_in_stock)
        return res.status(400).json({ title: "missing parameters", message: "not all necessary parameters were sent" });
    //האם המחיר של המוצר תקין
    if (body.price < 1)
        return res.status(400).json({ title: "price not good", message: "price need be bigger then 0" });
    //האם כמות המלאי תקינה
    if (body.quantity_in_stock < 1)
        return res.status(400).json({ title: "quantity_in_stock not good", message: "quantity_in_stock need be bigger then 0" });
    //הוספת המוצר
    let newGift = new GIFTS(req.body);
    let data = await newGift.save();
    try {
        res.json(data);
    }
    catch (err) {
        res.status(400).json({ title: "error in add new gift", message: err.message });
    }
}

//עדכון פרטי מוצר
export const updateGift = async (req, res) => {
    let { id } = req.params;
    let body = req.body;
    let data = await GIFTS.findByIdAndUpdate(id, body, { new: true });
    try {
        if (!data)
            return res.status(404).json({ title: "error cannot get byId to update", message: "id is not exist" });
        res.json(data);
    }
    catch (err) {
        res.status(400).json({ title: "error in update", message: err.message });
    }
}

//קבלת כל המוצרים שאזלו מהמלאי
export const getAllGiftOutOfStock = async (req, res) => {
    let data = await GIFTS.find({ quantity_in_stock: 0 });
    try {
        res.json(data);
    }
    catch (err) {
        res.status(400).json({ title: "error in get all gifts that out of stock", message: err.message });
    }
}

// //עדכון מלאי
// export const updateQuantityInStock = async (req, res) => {
//     let { id, number } = req.params;

//     let gift = getGiftById(id)
//     //בדיקה אם המוצר קיים
//     if (!gift) {
//         return res.status(404).json({ title: "error cannot get byId to update", message: "id undefind" });
//     }
//     //בדיקה אם הכמות שנשלחה לא תקינה
//     if (gift.quantity_in_stock + number < 0)
//         return res.status(400).json({ title: "cannot upate quantity", message: "The number is greater than the quantity" })
//     let data = await GIFTS.findByIdAndUpdate(id, { quantity_in_stock: gift.quantity_in_stock + number }, { new: true });
//     try {
//         res.json(data);
//     }
//     catch (err) {
//         res.status(400).json({ title: "error in update", message: err.message });
//     }
// }

