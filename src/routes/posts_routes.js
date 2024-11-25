import express from "express";
import multer from "multer";
import { listPosts, submitNewPost, uploadImage } from "../controllers/posts_controller.js";

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ dest: "./uploads", storage });
const routes = (app) => {
    app.use(express.json());
    app.get("/posts", listPosts);
    app.post("/posts", submitNewPost);
    app.post("/upload", upload.single("image"), uploadImage, (req,res) => {
        res.status(200).json({ message: "Image uploaded successfully" });
    });
}
export default routes;