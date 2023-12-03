import express from "express"
// backed me .js extension compalsarihai
import { uploadImage,downloadImage } from "../controller/ImageController.js";
import upload from "../middleware/upload.js";

const router= express.Router();


router.post("/upload",upload.single('file'),uploadImage)

router.get("/file/:fileId",downloadImage);


export default router;