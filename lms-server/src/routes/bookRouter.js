import express from "express";
import { getBookDetail } from "../controller/bookController.js";

const router = express.Router();

router.get("/book", getBookDetail);

export default router;
