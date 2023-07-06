import express from "express";
import { createPost, getFeedPosts, getUserPosts, likePost } from "../controllers/postsController.js";
// import { createPost } from './../controllers/postsController';
import authentication from './../middleware/authentication.js';
const router = express.Router();

// craete post
router.post("/createPost",createPost);

/* READ */  
router.get("/getFeedPosts", getFeedPosts);
router.get("/:userId/posts", authentication, getUserPosts);

/* UPDATE */
router.patch("/:id/like", authentication, likePost);

export default router;
