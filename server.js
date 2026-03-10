import express from "express";
import cors from "cors";
import searchRoute from "./routes/search.js";
import aiSearchRoute from "./routes/aiSearch.js";

const app = express();


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("CodeStackRadar API is running 🚀");
});

app.use("/api/ai-search", aiSearchRoute);
app.use("/api/search", searchRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`CodeStackRadar API running on ${PORT}`);
});
