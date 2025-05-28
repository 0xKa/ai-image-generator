import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import OpenAI from "openai";
import { APIClient } from "openai/core.mjs";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI,
});

const app = express();
app.use(cors());
app.use(express.json());

app.post("/image", async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const aiResponse = await openai.images.generate({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "url",
    });

    const imageUrl = aiResponse.data[0].url;
    res.send({ imageUrl });
  } catch (error) {
    console.error("Error generating image:", error);
    res.status(500).send({ error: "Failed to generate image" });
  }
});

app.listen(8080, () => {
  console.log("Server is running on port 8080 (http://localhost:8080)");
});
