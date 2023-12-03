import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

export const dbconnection =async()=>{
const MONGO_URI=process.env.Db_Url;

try {
    await mongoose.connect(MONGO_URI);
    console.log("Database Connected successfully");
    
} catch (error) {
    console.error("Error While connecting with the Database",error.message);
    
}



}