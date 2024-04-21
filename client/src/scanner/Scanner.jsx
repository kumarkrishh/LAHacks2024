import "./scanner.css";
import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useState, useEffect } from "react";
import Quagga from "quagga";
import Navbar from "../components/navbar/Navbar";

function parseSustainableAlternatives(text) {
  const entries = text.split(/(?=\d+\. )/); 
  return entries
    .map((entry) => {
      const lines = entry
        .trim()
        .split("\n")
        .map((line) => line.trim());


      const name = lines[0].replace(/^\d+\. /, "").trim(); 

      const description =
        lines[1]?.replace("- Reason: ", "").trim() ||
        "Description not available";
      const store =
        lines[2]?.replace("- Store: ", "").trim() || "Store not available";
      const price =
        lines[3]?.replace("- Price: ", "").trim() || "Price not available";

      return {
        name,
        description,
        store,
        price,
      };
    })
    .filter((entry) => entry.name && entry.description); 
}

const Scanner = () => {
  const [scannerActive, setScannerActive] = useState(false);
  const [foundCodes, setFoundCodes] = useState(null);
  const [productInfo, setProductInfo] = useState("");
  const [chatGPTResponse, setChatGPTResponse] = useState("");
  const [error, setError] = useState("No barcode detected.");
  const [isProductInfoFetched, setIsProductInfoFetched] = useState(false);
  const genAI = new GoogleGenerativeAI(
    process.env.REACT_APP_GOOGLE_API
  );
  const [productName, setProductName] = useState("");
  const [sust, setSust] = useState("");

  const start = () => {
    setScannerActive(true);
    const config = {
      locate: true,
      inputStream: {
        name: "live",
        type: "LiveStream",
        target: document.querySelector("#videoWindow"),
      },
      decoder: {
        readers: ["upc_reader"],
        multiple: true,
      },
      locator: {
        halfSample: true,
        patchSize: "medium",
      },
    };
    Quagga.init(config, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Initialization complete");
      Quagga.start();
    });
  };

  const stop = () => {
    setScannerActive(false);
    Quagga.stop();
  };


  const DisplayRecyclingInstructions = ({ text }) => {
    if (!text) return null;


    const steps = text.split(/(?:\r\n|\r|\n)/g);

    return (
      <div className="screcycling-instructions-container">
        <h3 style={{transform:'translateX(6vh)'}}>Recycling Steps:</h3>
        <ol>
          {steps.map((step, index) => {
            const cleanedStep = step.replace(/^\d+\.\s*/, "");
            return (
              <li key={index} className="screcycling-step">
                {cleanedStep}
              </li>
            );
          })}
        </ol>
      </div>
    );
  };

  const DisplaySustainableAlternatives = ({ alternatives }) => {
    return (
      <div
        className="scalternatives-container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h3 style={{transform:'translateX(6vh)'}}>Sustainable Alternatives:</h3>
        {alternatives.map((alt, index) => (
          <div key={index} className="scalternative-item">
            <h4 className="scalternative-header">{alt.name}</h4>
            <p className="scalternative-description">{alt.description}</p>
            <p className="scalternative-availability">
              Available at {alt.store} for {alt.price}
            </p>
          </div>
        ))}
      </div>
    );
  };

  const fetchProductInfo = async () => {
    if (!foundCodes) {
      setError("No barcode detected.");
      alert(error);
      return;
    }
    const url = `https://product-lookup-by-upc-or-ean.p.rapidapi.com/code/${foundCodes.code}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "171f562df8msh98da1863b77273ep15a470jsncc7b57fec442",
        "X-RapidAPI-Host": "product-lookup-by-upc-or-ean.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json(); 
      setProductInfo(JSON.stringify(data));
      setProductName(data.product.name);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch product info");
      alert(error);
    }
  };

  const fetchGeminiDetails = async (productName1) => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt = `Tell me in 5 steps how I can recycle the following product ${productName1}. Put it in sentence format and don't include a title.`;

      const result = await model.generateContent(prompt);
      const repsonse = await result.response;
      const text = await repsonse.text();

      setChatGPTResponse(text);
    } catch (error) {
      console.error("Gemini API Fetch Error:", error);
      setError("Failed to fetch detailed info from Gemini API");
      alert(error);
    }
  };

  const fetchGeminiDetails2 = async (productName1) => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt = `List ONLY the top three sustainable alternatives to the product:
       ${productName1}. For each alternative, provide it in this format:
       {index}. {Alternative Name}
       - {Reason}: A brief description of why it is more sustainable.
       - {Store}: The store where it can be purchased.
       - {Price}: Its price.
Please format your response with each alternative numbered and separated by a newline, with details clearly marked.`;

      const result = await model.generateContent(prompt);
      const repsonse = await result.response;
      let text = await repsonse.text();

      text = text.replace(/\*/g, "");
      console.log("API Response Text: \n", text);

      const parsedAlternatives = parseSustainableAlternatives(text);

      setSust(parsedAlternatives);
    } catch (error) {
      console.error("Gemini API Fetch Error:", error);
      setError("Failed to fetch detailed info from Gemini API");
      alert(error);
    }
  };

  useEffect(() => {
    if (productName) {
      fetchGeminiDetails(productName);
      fetchGeminiDetails2(productName);
    }
  }, [productName]);

  const handleGetProductInfo = async () => {
    setIsProductInfoFetched(false); 
    try {
      await fetchProductInfo(); 
      setIsProductInfoFetched(true); 
    } catch (error) {
      console.error("Error fetching product info:", error);
      setError("Failed to fetch product info.");
      alert(error);
    }
  };

  useEffect(() => {
    Quagga.onDetected((data) => {
      const foundResult = data[0]; 
      if (foundResult && foundResult.codeResult) {
        const foundCode = {
          code: foundResult.codeResult.code,
          type: foundResult.codeResult.format,
        };
        console.log(foundCode);
        setFoundCodes(foundCode);
      }
    });
    return () => {
      Quagga.offDetected();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage:
          "C:/Users/ngupt/Desktop/lahacks/client/src/images/loginbackground.jpg",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />

      <Navbar />
      <table className="scmy-table">
        <tbody>
          <tr className="scfirst-row">
            <td colSpan="2">
              <div class="sctitle-container">EcoScan </div>
            </td>
          </tr>

          <tr
            className="scthird-row"
            style={{ backgroundColor: "transparent" }}
          >
            <td>
              <div className="scbarcode-container" style={{transform:'translateY(-6vh)'}}>
                <p>Barcode ID:</p>
                {foundCodes && (
                  <div className="scbarcode">
                    <p>{foundCodes.code}</p>
                  </div>
                )}
              </div>
              <div className="scvideo-container">
                <div id="videoWindow"></div>
              </div>
              <div className="scbutton-container">
                <div className="scbuttonSpan" style={{transform:'translateY(-2.5vh)', paddingBottom: '1vh'}}>
                  <button
                    className="scbutton"
                    onClick={scannerActive ? stop : start}
                    style={{paddingBottom:'3vh'}}
                  >
                    {scannerActive ? "Stop Scanner" : "Start Scanner"}
                  </button>
                  <button className="scbutton" onClick={handleGetProductInfo}>
                    Fetch Product
                  </button>
                </div>
              </div>
            </td>
          </tr>

          <tr className="scsecond-row">
            <td colSpan="2">
              <div class="scproduct-title">
                Product Information:{" "}
                {isProductInfoFetched && productInfo && <p style={{transform: 'translateX(38vh)'}}>{productName}</p>}
              </div>
            </td>
          </tr>
          <tr className="scfourth-row">
            <td colSpan="2">
              <div
                className="scresponse-container"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {chatGPTResponse && (
                  <div style={{ flex: 1, marginRight: "10px" }}>
                    {" "}
                    <DisplayRecyclingInstructions text={chatGPTResponse} />
                  </div>
                )}
                {/* {error && <p className="error-message">{error}</p>} */}
                {sust.length > 0 && (
                  <div style={{ flex: 1 }}>
                    <DisplaySustainableAlternatives alternatives={sust} />
                  </div>
                )}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Scanner;
