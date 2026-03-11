import express from "express";
import { getEmbedding } from "../services/embeddingService.js";

const router = express.Router();

router.get("/", async (req, res) => {

  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ error: "Missing query" });
  }

  const embedding = await getEmbedding(query);

  res.json({
    query,
    embeddingLength: embedding.length,
    sample: embedding.slice(0,5)
  });

});

export default router;
