import "./style.css";

const form = document.querySelector("form");
const result = document.querySelector("#result");
const submitButton = form.querySelector("button[type='submit']");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const prompt = formData.get("prompt");

  // Validate prompt
  if (!prompt || prompt.trim() === "") {
    result.innerHTML = '<div class="error">Please enter a prompt</div>';
    return;
  }

  // Show loading state
  submitButton.disabled = true;
  submitButton.textContent = "Generating...";
  result.innerHTML = "<div>Generating your image...</div>";
  result.classList.add("loading");

  try {
    const response = await fetch("http://localhost:8080/image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt.trim(),
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }

    const { imageUrl } = data;
    result.innerHTML = `<img src="${imageUrl}" alt="Generated Image" />`;
    result.classList.add("success");
  } catch (error) {
    console.error("Error generating image:", error);
    result.innerHTML = `<div class="error">Failed to generate image: ${error.message}</div>`;
  } finally {
    // Reset button state
    submitButton.disabled = false;
    submitButton.textContent = "Submit";
    result.classList.remove("loading");
  }
});
