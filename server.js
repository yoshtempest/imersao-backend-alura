import routes from "./src/routes/posts_routes.js";
import express from "express";

const app = express();

app.use(express.json());
routes(app)
app.listen(3000, () =>
{
    console.log("Server is running on port 3000");
});
