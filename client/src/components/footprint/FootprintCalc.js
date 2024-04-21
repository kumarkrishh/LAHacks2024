import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./stylecarbon.css";
import treepic from "./tree.webp";
import formbackground from "./carbonimage.webp";
import Navbar from "../navbar/Navbar";
const Learn = () => {
  useEffect(() => {
    const ctx = document.getElementById("myChart").getContext("2d");
    if (window.myPieChart) {
      window.myPieChart.destroy();
    }
    window.myPieChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Transportation", "Home Energy", "Diet"],
        datasets: [
          {
            label: "CO2 Emissions (kg)",
            data: [1, 1, 1],
            backgroundColor: [
              "rgba(255, 99, 132, 0.7)",
              "rgba(54, 162, 235, 0.7)",
              "rgba(255, 206, 86, 0.7)",
            ],
            borderColor: ["white", "white", "white"],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          tooltip: {
            mode: "index",
            intersect: false,
          },
        },
      },
    });
  });

  const calculateTreesToPlant = (annualCO2) => {
    const CO2_PER_TREE = 21.77; // kg CO2 per tree absorbed per year
    return Math.ceil(annualCO2 / CO2_PER_TREE);
  };

  const calculatefootprintval = (totalEmissions) => {
    const CO2_PER_TREE = 21.77; // kg CO2 per tree absorbed per year
    return Math.ceil(totalEmissions);
  };

  const calculateFootprint = () => {
    const milesDriven = parseFloat(
      document.getElementById("milesDriven").value
    );
    const fuelType = document.getElementById("fuelType").value;
    const monthlyKWh = parseFloat(document.getElementById("monthlyKWh").value);
    const meatIntake = parseFloat(document.getElementById("meatIntake").value);

    const fuelEmissions = { petrol: 2.3, diesel: 2.7, electric: 0.6 };
    const electricityEmissions = 0.5; // per kWh
    const meatEmissions = 27; // per kg

    let transportEmissions = milesDriven * 365 * fuelEmissions[fuelType];
    let homeEnergyEmissions = monthlyKWh * 12 * electricityEmissions;
    let dietEmissions = meatIntake * 52 * meatEmissions;
    let totalEmissions =
      transportEmissions + homeEnergyEmissions + dietEmissions;

    document.getElementById("footprint").innerText = `Your annual carbon footprint is ${calculatefootprintval(totalEmissions)} kg of CO2.`;
    document.getElementById("myChart").style.display = "block"; // Display the chart
    document.getElementById("treestoplant").innerText = `You need to plant ${calculateTreesToPlant(totalEmissions)} trees.`;
    window.myPieChart.data.datasets = [
      {
        data: [transportEmissions, homeEnergyEmissions, dietEmissions],
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
        ],
        borderColor: ["white", "white", "white"],
        borderWidth: 2,
      },
    ];
    //window.myPieChart.updat
    console.log(window.myPieChart.data.datasets);
    window.myPieChart.update();
    document.getElementById("myChart").scrollIntoView({ behavior: "smooth" });

    run();
  };

  const run = async () => {
    document.querySelector(".loader").style.display = "block";
    const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GOOGLE_API);
    console.log("running");
    const location = document.getElementById("location").value;
    const budget = parseFloat(document.getElementById("budget").value);
    const milesDriven = parseFloat(
      document.getElementById("milesDriven").value
    );
    const fuelType = document.getElementById("fuelType").value;
    const monthlyKWh = parseFloat(document.getElementById("monthlyKWh").value);
    const meatIntake = parseFloat(document.getElementById("meatIntake").value);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Give top 5 extremely specific ways the user can reduce their carbon footprint for a user specific to their location: ${location}, with a budget: $${budget}, driving ${milesDriven} per day with a fuel type of ${fuelType} who also uses ${monthlyKWh} kWh of electricity per month for their home and eats ${meatIntake} kg of meat. Don't include a title.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();

    text = text.replace(/\*\*(.*?)\*\*/g, "**<b>$1</b>**");
    text = text.replace(/^\d+\.\s*/gm, "");
    let words = text.split(" ");

    // Manually edit each word
    for (let i = 0; i < words.length; i++) {
      if (words[i].includes("*")) {
        words[i] = words[i].replace(/\*/g, "<br>");
      }
    }
    text = words.join(" ");
    document.getElementById("resulttitle").innerHTML =
      "How to Reduce Your Carbon Footprint";
    document.getElementById("result").innerHTML = text; // Display the generated text
    document.querySelector(".loader").style.display = "none";
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <Navbar />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div
        style={{
          backgroundImage: `url(${formbackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minWidth: "100vw",
          minHeight: "160vh",
          marginTop: '-20px'
        }}
      >
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <form id="calculator" style={{ fontSize: "18px", fontWeight: "bold" , width: '35vw'}}>
          <fieldset>
            <legend>Personal Information</legend>
            <label htmlFor="location">Location (City):</label>
            <input type="text" id="location" name="location" required />
            <label htmlFor="budget">
              Budget for environmental initiatives ($):
            </label>
            <input type="number" id="budget" name="budget" />
          </fieldset>
          <fieldset>
            <legend>Transportation</legend>
            <label htmlFor="milesDriven">Miles driven per day:</label>
            <input type="number" id="milesDriven" name="milesDriven" required />
            <label htmlFor="fuelType">Fuel Type:</label>
            <select id="fuelType" name="fuelType">
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
              <option value="electric">Electric</option>
            </select>
          </fieldset>
          <fieldset>
            <legend>Home Energy Usage</legend>
            <label htmlFor="monthlyKWh">Monthly electricity usage (kWh):</label>
            <input type="number" id="monthlyKWh" name="monthlyKWh" required />
          </fieldset>
          <fieldset>
            <legend>Diet</legend>
            <label htmlFor="meatIntake">Weekly meat intake (kg):</label>
            <input type="number" id="meatIntake" name="meatIntake" required />
          </fieldset>
          <button
            type="button"
            id="calculateButton"
            onClick={calculateFootprint}
          >
            Calculate Footprint
          </button>
        </form>
      </div>

      <div className="container2">
        <div className="chart-container" style={{alignItems: 'center', justifyContent: 'center', transform: 'translateX(80px)'}} >
          <div className="testcontainer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <canvas id="myChart"></canvas>
          <div style={{ textAlign: "center", marginTop: "22px", paddingRight: '100px' }}>
            <p id="footprint" className="datatitle" style={{ transform: 'translateX(40px)', textAlign: 'center', fontSize: "22px" }}>Your annual carbon footprint ...</p>
          </div>
          </div>
          <div className="white-box" style={{transform: 'translateY(-40px)', maxHeight: '500px'}}>
            <img className="treeimg" src={treepic} alt="Tree" style={{transform: 'translateY(10px)'}} />
            <div
              className="datatitle"
              id="treestoplant"
              style={{ fontSize: "22px" , marginTop: "40px"}}
            >
              Trees to plant
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100vw",
          height: "auto",
          marginBottom: "-300px",
          marginTop: "-20px",
        }}
      >
        <section id="result-section">
          <br />
          <div className="loader"></div>
          <br />
          <div className="title" id="resulttitle"></div>
          <div id="result" style={{ fontSize: "24px" }}></div>
        </section>
      </div>
    </div>
  );
};

export default Learn;
