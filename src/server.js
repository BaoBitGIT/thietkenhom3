import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
  })
);

// test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// test ENV
app.get("/env", (req, res) => {
  res.json({
    PORT: process.env.PORT,
    SUPABASE_URL: process.env.SUPABASE_URL ? "OK" : "MISSING",
    GEMINI_API_KEY: process.env.GEMINI_API_KEY ? "OK" : "MISSING",
  });
});

// PORT cho Render
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
