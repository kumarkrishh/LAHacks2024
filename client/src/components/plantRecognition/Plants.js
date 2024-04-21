import React, { useState } from "react";
import "./plants.css";
import { Container, Typography } from "@mui/material";
import loadingleaf from "./loadingleaf.gif";
import Navbar from "../navbar/Navbar";

const { GoogleGenerativeAI } = require("@google/generative-ai");

const Plants = () => {
  const [generatedText, setGeneratedText] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("");
  const genAI = new GoogleGenerativeAI(
    process.env.REACT_APP_GOOGLE_API
  );

  const convertToPNG = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = function (event) {
        const img = new Image();

        img.onload = function () {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          canvas.width = img.width;
          canvas.height = img.height;

          ctx.drawImage(img, 0, 0);

          const pngDataUrl = canvas.toDataURL("image/png");

          resolve(pngDataUrl);
        };

        img.src = event.target.result;
      };

      reader.onerror = function (error) {
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setError("Please upload an image.");
      setSelectedFileName("Choose a file...");
      return;
    }

    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file.");
      setSelectedFileName("Choose a file...");
      return;
    }
    setError("");
    setSelectedFileName(file.name);
  };

  const handleFileUpload = async (prompt) => {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    if (!file) {
      setError("Please upload an image.");
      return;
    }

    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const imagePart = await fileToGenerativePart(file);
      const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

      const result = await model.generateContent([prompt, imagePart]);
      const response = await result.response;
      let text = await response.text();
      const maxHeight = window.innerHeight;
      const maxWidth = window.innerWidth;

      const characterDensity = maxHeight * maxWidth * 0.0001;

      const maxTotalChars = Math.floor(characterDensity * 10) - 200;
      const sentences = text.split(/[.!?]+/);

      let totalCharsProcessed = 0;

      text = sentences
        .map((sentence) => {
          if (totalCharsProcessed + sentence.length > maxTotalChars) {
            return "";
          }

          totalCharsProcessed += sentence.length;
          return sentence;
        })
        .filter(Boolean)
        .join(". ");

      text = text.replace(/\*/g, "");

      setGeneratedText(text + ".");
    } catch (error) {
      console.error("Gemini API Fetch Error:", error);
      setError("Failed to fetch detailed info from Gemini API");
    } finally {
      setLoading(false);
    }
  };

  const fileToGenerativePart = async (file) => {
    const pngDataUrl = await convertToPNG(file);
    return {
      inlineData: {
        data: pngDataUrl.split(",")[1],
        mimeType: "image/png",
      },
    };
  };

  return (
    <div className="NEApp" style={{ paddingTop: "10vh" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <Navbar />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 3,
          paddingBottom: 15,
          backgroundColor: "rgba(240, 240, 240, 0.68)",
          borderRadius: 8,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          width: "80vh",
          height: "75vh",
          marginTop: "10vh",
          overflow: "auto",
          wordWrap: "break-word",
        }}
      >
        <div style={{ padding: "30px" }}>
          <Typography variant="h3" gutterBottom sx={{ color: "green" }}>
            Nature's Eye
          </Typography>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input
              type="file"
              id="fileInput"
              onChange={handleFileInputChange}
            />
            <label for="fileInput" className="NEfileInputLabel">
              {selectedFileName || "Choose a file..."}
            </label>
          </div>
          {error && (
            <p>
              Error: {error} <span style={{ color: "red" }}></span>
            </p>
          )}

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <button
              className="NEbutton-33"
              onClick={() =>
                handleFileUpload(
                  "Identify what vegetation is in the image. Describe the vegetation, its habitat and distribution, and ecology. Explain how it compares to commonly known plants in terms of sustainability metrics such as carbon footprint, water usage, and environmental friendliness."
                )
              }
              disabled={loading}
            >
              Identify
            </button>

            <button
              className="NEbutton-33"
              onClick={() =>
                handleFileUpload(
                  "Evaluate the environment. Point out key aspects, including but not limited to: status of vegetation, visible (or possible) sources of pollution, and sustainability issues that may apply to the environment."
                )
              }
              disabled={loading}
            >
              Environment
            </button>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <button
              className="NEbutton-33"
              onClick={() =>
                handleFileUpload(
                  "Give some advice on how I can improve the biodiversity of the environment in the photo. Emphasize actions that individuals and local organizations can take to improve sustainability, combat pollution, and improve the environment."
                )
              }
              disabled={loading}
            >
              Advice
            </button>

            <button
              style={{}}
              className="NEbutton-33"
              onClick={() =>
                handleFileUpload(
                  "If there is vegetation, give me some fun facts about it! Its scientific name, history, evolution, the person who it was discovered by, and others are all potential topics. You can also mention its potential uses, whether in medicine, clothing, or some other aspect of society."
                )
              }
              disabled={loading}
            >
              Fun Fact
            </button>
          </div>

          {loading && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={loadingleaf} alt="Loading..." />
            </div>
          )}

          {!loading && generatedText && !error && (
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "rgba(200, 200, 200, 0.68)",
                borderRadius: 8,
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                fontfamily: "CerebriSans-Regular,-apple-system,system-ui",
                fontSize: 18,
                maxWidth: "70vh",
                margin: "auto",
              }}
            >
              <p>{generatedText}</p>
            </Container>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Plants;
