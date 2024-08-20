import express from "express";
import upload from "../middleware/multer.js";
import { fileUpload } from "../controllers.js/fileupload.js";
const route = express.Router()

route.post('/upload', upload.single('file'), fileUpload);

export default route;