import connectToBank from "../config/db_config.js";

const connection = await connectToBank(process.env.STRING_CONEXAO);

export async function getAllPosts() {
    const db = connection.db("imersao-backend-alura");
    const postsCollection = db.collection("posts");
    return postsCollection.find().toArray();
}
export async function createPost(newPost) {
    const db = connection.db(imersao-backend-alura);
    const postsCollection = db.collection("posts");
    return postsCollection.insertOne(newPost);
}