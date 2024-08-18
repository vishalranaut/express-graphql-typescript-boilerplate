import express from "express";
import Controller from "./controller";

const router = express.Router();

router.get("/examples", Controller.findSampleById);

export default router;
