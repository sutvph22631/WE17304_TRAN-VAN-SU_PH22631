import express from "express";
import router from "./routers/routers.js";
import dotenv from "dotenv";

dotenv.config()
const app = express()

app.use(express.json())

app.use("/api",router)

app.listen(process.env.PORT,()=>{
    console.log(`Server running on ${process.env.PORT}`);
})


