import express from "express";
import { getEmbedding } from "../services/embeddingService.js";

const router = express.Router();

router.get("/", async (req, res) => {

  const error = req.query.q;

  const embedding = await getEmbedding(error);

  res.json({
    embeddingLength: embedding.length
  });

});

export default router;
