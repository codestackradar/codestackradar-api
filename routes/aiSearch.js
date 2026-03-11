import express from "express";
import { getEmbedding } from "../services/embeddingService.js";

const router = express.Router();

router.get("/", async (req, res) => {

  try {

    const query = req.query.q || "";

    const embedding = await getEmbedding(query);

    res.json({
      success: true,
      embeddingLength: embedding.length
    });

  } catch (err) {

    res.json({
      success: false,
      message: "AI service temporarily unavailable"
    });

  }

});

export default router;
