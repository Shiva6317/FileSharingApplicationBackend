import File from "../models/fileval.js";
import dotenv from "dotenv";
dotenv.config();

const Backend_URI=process.env.Back_Url;
export const uploadImage=async (request,response)=>{

    const FileData={
        path:request.file.path,
        name:request.file.originalname
    }

    try {
        const file=await File.create(FileData);
        // console.log(file);

        return response.status(200).json({path:`${Backend_URI}/file/${file._id}`});
        
    } catch (error) {


        return response.status(504).json({msg:"data not store"})
        
    }


}

export const downloadImage=async(request,response)=>{
try {

const file=await File.findById(request.params.fileId);
file.downloadContent++;

await file.save();

response.download(file.path,file.name);
    
} catch (error) {

    return response.status(500).json({msg:"image not downloaded"})
    
}

}