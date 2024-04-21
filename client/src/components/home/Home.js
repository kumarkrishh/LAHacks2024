import React from "react";
import { useNavigate } from "react-router-dom";

import "./stylehome.css";
import Category1Image from "C:/Users/ngupt/Desktop/lahacks/client/src/images/category-1.jpg";
import Category2Image from "C:/Users/ngupt/Desktop/lahacks/client/src/images/category-2.jpg";
import Category3Image from "C:/Users/ngupt/Desktop/lahacks/client/src/images/category-3.jpg";
import ReforestationImage from "C:/Users/ngupt/Desktop/lahacks/client/src/images/reforestation.png";
import DirectAirCaptureImage from "C:/Users/ngupt/Desktop/lahacks/client/src/images/directaircapture.png";
import BlueCarbonImage from "C:/Users/ngupt/Desktop/lahacks/client/src/images/bluecarbon.png";
import BioenergyImage from "C:/Users/ngupt/Desktop/lahacks/client/src/images/bioenergy.png";

import Navbar from "../navbar/Navbar";

const Home = () => {
  const navigate = useNavigate();

  const onNagivate = () => {
    navigate("/projects");
  };

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      ></link>
      <header className="header">
        <div className="container">
          <h1 className="headertitle">INVEST IN A GREENER FUTURE</h1>
          {/* <div className="navbar">
            <a href="/test">Home</a>
            <a href="/index">Projects</a>
            <a href="/login">Sign Up/Sign In</a>
            <a href="/register">Contact</a>
            <a href="/co2footprint"> CO2 Footprint</a>
          </div> */}
        </div>
        <Navbar />
        <h3 className="headersubtitle">
          Join the Movement to Reduce Carbon Footprints, Restore Ecosystems, and
          Drive Sustainable Innovation
        </h3>
      </header>

      <div className="intro-section">
        <div className="textcontainer">
          <p>
            Our website is dedicated to promoting sustainable practices for
            carbon sequestration in the environment. We provide information,
            tools, and resources to help individuals and organizations reduce
            their carbon footprint and contribute to a cleaner, greener planet.
            Join us in our mission to make a positive impact on the environment
            and create a more sustainable future for generations to come!
          </p>{" "}
          <br />
          <a href="/projects" class="btn">
            Learn More &#8594;
          </a>
        </div>
      </div>
      <div className="latestproducts">
        <div style={{ paddingBottom: "4vh" }}>
          <h2 className="title" style={{marginBottom:'5vh'}}>
            <br />
            Global Initiatives
          </h2>
        </div>
        <div className="row">
          <div className="col-4">
            <button
              onClick={onNagivate}
              style={{ backgroundColor: "transparent"}}
            >
              <img src={ReforestationImage} alt="Reforestation" />
            </button>
          </div>
          <div className="col-4">
            <button
              onClick={onNagivate}
              style={{ backgroundColor: "transparent" }}
            >
              <img src={DirectAirCaptureImage} alt="Direct Air Capture" />
            </button>
          </div>
          <div className="col-4">
            <button
              onClick={onNagivate}
              style={{ backgroundColor: "transparent" }}
            >
              <img src={BlueCarbonImage} alt="Blue Carbon" />
            </button>
          </div>
          <div className="col-4">
            <button
              onClick={onNagivate}
              style={{ backgroundColor: "transparent" }}
            >
              <img src={BioenergyImage} alt="Bioenergy" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
