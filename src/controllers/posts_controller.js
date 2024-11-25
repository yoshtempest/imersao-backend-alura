import { getAllPosts, createPost } from "../models/posts_models.js";

export const listPosts = async (req, res) =>
{
    try {
    const posts = await getAllPosts();
    res.status(200).json(posts);
    console.log('Returned posts:', posts);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export async function submitNewPost(req, res) {
    const newPost = req.body;
    if (!newPost.title || !newPost.content) {
        return res.status(400).json({ message: "Invalid post data" });
    }
    try {
        const createdPost = await createPost(newPost)
        res.status(200).json(createdPost);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function uploadImage(req, res) {
    const newPost = req.body;
    if (!newPost.title || !newPost.content) {
        return res.status(400).json({ message: "Invalid post data" });
    }
    try {
        const createdPost = await createPost(newPost)
        res.status(200).json(createdPost);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}