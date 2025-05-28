# AI Image Generator

A simple web application that generates images using OpenAI's DALL-E API. Built with vanilla JavaScript, Express.js, and Vite.

NOTE: Currently, the application uses random placeholder images for development purposes. The OpenAI API keys are not active.

## Features

- Clean and modern UI
- Real-time image generation
- Responsive design
- Loading states and error handling
- Currently uses random placeholder images for development

## Tech Stack

- **Frontend**: Vanilla JavaScript, HTML, CSS
- **Backend**: Node.js, Express.js
- **Build Tool**: Vite
- **AI API**: OpenAI DALL-E (configured but currently using placeholder images)

## Project Structure

```
├── server.js          # Express server
├── index.html         # Main HTML file
├── package.json       # Dependencies and scripts
├── .env              # Environment variables
├── src/
│   ├── main.js       # Frontend JavaScript
│   └── style.css     # Styles
└── public/
    └── vite.svg      # Favicon
```

## Usage

1. Enter a descriptive prompt in the textarea
2. Click "Submit" to generate an image
3. Wait for the image to load (currently shows random placeholder images)
