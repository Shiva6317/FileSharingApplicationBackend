import express from "express";
import router from "./routes/routes.js";
import cors from "cors"
import { dbconnection } from "./database/db.js";
const app=express();

app.use(cors());
app.use("/",router);


const PORT=process.env.PORT ||8800;
dbconnection();
app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))