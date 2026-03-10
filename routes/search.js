import express from "express";
import { searchStackOverflow } from "../services/stackoverflowService.js";

const router = express.Router();

/* Browser test */
router.get("/", async (req, res) => {

  const query = req.query.q;

  if (!query) {
    return res.send("CodeStackRadar search API working. Use ?q=error");
  }

  try {

    const results = await searchStackOverflow(query);

    res.json(results);

  } catch (err) {

    console.error(err);
    res.status(500).json({ error: "Search failed" });

  }

});

/* Main API */
router.post("/", async (req, res) => {

  const { error } = req.body;

  try {

    const results = await searchStackOverflow(error);

    res.json(results);

  } catch (err) {

    console.error(err);
    res.status(500).json({ error: "Search failed" });

  }

});

export default router;