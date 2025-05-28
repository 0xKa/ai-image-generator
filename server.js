import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Array of random image URLs
const getRandomImage = (prompt) => {
  //  Picsum (completely random)
  const randomId = Math.floor(Math.random() * 1000) + 1;
  return `https://picsum.photos/1024/1024?random=${randomId}`;
};

app.post("/image", async (req, res) => {
  try {
    console.log("Received request:", req.body);

    const prompt = req.body.prompt;

    if (!prompt || prompt.trim() === "") {
      return res.status(400).json({ error: "Prompt is required" });
    }

    console.log("Generating random image for prompt:", prompt);

    // Simulate API delay to make it feel realistic
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const imageUrl = getRandomImage(prompt);

    console.log("Random image URL generated:", imageUrl);
    res.json({ imageUrl });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to generate image" });
  }
});

app.listen(8080, () => {
  console.log("Server is running on port 8080 (http://localhost:8080)");
  console.log("Using random images instead of AI generation");
});
