import express from "express";
import axios from "axios";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import cors from "cors";
import { z } from "zod";

dotenv.config();

const app = express();

// ---- Security Middleware ----
app.use(helmet());
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  }),
);

// ---- Rate Limiting ----
app.use(
  rateLimit({
    windowMs: 60 * 60 * 1000, // 60 min
    max: 2, // limit each IP to 1 request per windowMs
  }),
);

// ---- Env Validation ----
const REQUIRED_ENV = ["APP_ID", "CLIENT_ID", "API_KEY", "FRONTEND_URL"];
REQUIRED_ENV.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing env: ${key}`);
  }
});

// ---- URL Validation Schema ----
const urlSchema = z.object({
  url: z
    .string()
    .url()
    .refine((val) => val.includes("instagram.com"), {
      message: "Only Instagram URLs allowed",
    }),
});

// ---- Axios Instance ----
const api = axios.create({
  baseURL: "https://gateway.apyflux.com",
  timeout: 10000,
  headers: {
    "x-app-id": process.env.APP_ID,
    "x-client-id": process.env.CLIENT_ID,
    "x-api-key": process.env.API_KEY,
  },
});

// ---- Route ----
app.get("/download", async (req, res) => {
  try {
    // 1. Validate input
    const parsed = urlSchema.safeParse(req.query);
    if (!parsed.success) {
      return res.status(400).json({
        error: "Invalid URL",
        details: parsed.error.issues,
      });
    }

    const { url } = parsed.data;

    // 2. Call external API
    const response = await api.get("/instagram/", {
      params: { url },
    });

    // 3. Return sanitized response
    return res.json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    // ---- Error Handling ----
    if (error.response) {
      return res.status(error.response.status).json({
        error: "Upstream API error",
        details: error.response.data,
      });
    }

    if (error.code === "ECONNABORTED") {
      return res.status(504).json({
        error: "Timeout from upstream API",
      });
    }

    return res.status(500).json({
      error: "Internal server error",
    });
  }
});

// ---- Health Check ----
app.get("/health", (_, res) => {
  res.json({ status: "ok" });
});

// ---- Start Server ----
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
