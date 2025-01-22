import connectToDB from "./config/DB.js"
import userRouter from "./routes/userRoute.js"
import giftRouter from "./routes/giftRoute.js"
import orderRouter from "./routes/orderRoute.js"
import cors from "cors";
import dotenv from "dotenv";
import express from "express"
dotenv.config();
const app = express();

connectToDB();
app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/gift", giftRouter);
app.use("/order", orderRouter);

let port=process.env.PORT || 3001;

app.listen(3000, "localhost",()=>{
    console.log("app is listening on port " + port)
})