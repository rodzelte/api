import express from "express";
import postTask from "../controllers/postTask"; 
import getTask from "../controllers/getTask";
import patchTask from "../controllers/patchTask";
import removeTask from "../controllers/removeTask";

const router = express.Router();

// ✅ Correctly attaching controller functions to routes
router.get("/get", getTask);
router.post("/post", postTask);
router.patch("/patch/:id", patchTask);
router.delete("/remove/:id", removeTask);

export default router;
