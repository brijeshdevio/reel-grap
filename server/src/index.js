import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";
import { z } from "zod";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// ---- Validate URL ----
const urlSchema = z.object({
  url: z.string().url().includes("instagram.com"),
});

// ---- API Config ----
const API_URL = "https://apihut.in/api/download/videos";
const API_KEY = process.env.API_KEY;

// ---- Route ----
app.get("/download", async (req, res) => {
  try {
    // Validate input
    const parsed = urlSchema.safeParse(req.query);
    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        error: "Invalid Instagram URL",
      });
    }

    const { url } = parsed.data;

    // Call API (same as your working code)
    const response = await axios.post(
      API_URL,
      {
        video_url: url,
        type: "instagram",
      },
      {
        headers: {
          "x-avatar-key": API_KEY,
          "Content-Type": "application/json",
        },
      },
    );

    return res.json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    console.error(error?.response?.data || error.message);

    return res.status(500).json({
      success: false,
      error: "Something went wrong",
    });
  }
});

// ---- Start Server ----
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
