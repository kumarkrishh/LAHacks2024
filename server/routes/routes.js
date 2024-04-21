import express from "express";
import { getPosts, signup, signin } from "../controllers/controllers.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/signup", signup);
router.post("/signin", signin);

export default router;
