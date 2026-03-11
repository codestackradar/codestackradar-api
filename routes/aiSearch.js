import express from "express";
import { cleanError } from "../services/errorParser.js";
import { searchStackOverflow } from "../services/stackoverflowService.js";

const router = express.Router();

router.post("/", async (req, res) => {

  try {

    const { error } = req.body;

    const cleanedError = cleanError(error);

    const results = await searchStackOverflow(cleanedError);

    res.json({
      query: cleanedError,
      results
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: "Search failed"
    });

  }

});

export default router;
