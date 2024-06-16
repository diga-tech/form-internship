import express from "express";
import { getProduct_intern, getProduct_internById, createProduct_intern, updateProduct_intern, deleteProduct_intern } from "../controller/UserController.js";

const router = express.Router();

router.get("/intern", getProduct_intern);
router.get("/intern/:id", getProduct_internById);
router.post("/intern/", createProduct_intern);
router.patch("/intern/:id", updateProduct_intern);
router.delete("/intern/:id", deleteProduct_intern);

export default router;
