import express from "express";
const router = express.Router();

import * as controller from "../controller/post.js";
import { isAuthenticated } from "../middlewares/auth.js";



router.post("/create-post", isAuthenticated, controller.createPost);

router.get("/posts", isAuthenticated, controller.getAllPost);

// Like dislike
router.get("/like/:id", isAuthenticated, controller.likePost);
router.get("/unlike/:id", isAuthenticated, controller.unlikePost);


export default router;