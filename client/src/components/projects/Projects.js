import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import climatepic from "./climatechange.jpeg";
import climatepic2 from "./climatechange2.avif";
import sequestpic from "./sequestration.jpeg";
import Navbar from "../navbar/Navbar";
import refore1 from "./reforest1.jpeg";
import refore2 from "./refore2.jpeg";
import refore3 from "./refore3.jpeg";
import dac1 from "./dac1.avif";
import bluecarb1 from "./bluecarb1.jpg";
import bluecarb2 from "./bluecarb2.jpeg";

function Legend() {
  return (
    <div
      className="legend"
      style={{
        transform: "translateX(1050px) translateY(-420px)",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        color: "white",
        width: "300px",
        fontSize: "13px",
        fontWeight: "bold",
      }}
    >
      <div
        className="legend-item"
        style={{ marginLeft: "5px", display: "flex", marginBottom: "5px" }}
      >
        <div
          className="color-box"
          style={{
            border: "1px solid black",
            marginRight: "15px",
            transform: "translateY(1px)",
            backgroundColor: "#dcd9d9",
            width: "30px",
            height: "15px",
          }}
        >
          &nbsp;
        </div>
        <span>0 - 1,000,000 tons CO2</span>
      </div>
      <div
        className="legend-item"
        style={{ marginLeft: "5px", display: "flex", marginBottom: "5px" }}
      >
        <div
          className="color-box"
          style={{
            border: "1px solid black",
            marginRight: "15px",
            transform: "translateY(1px)",
            backgroundColor: "#aaaaaa",
            width: "30px",
            height: "15px",
          }}
        >
          &nbsp;
        </div>
        <span>1,000,000 - 5,000,000 tons CO2</span>
      </div>

      <div
        className="legend-item"
        style={{ marginLeft: "5px", display: "flex", marginBottom: "5px" }}
      >
        <div
          className="color-box"
          style={{
            border: "1px solid black",
            marginRight: "15px",
            transform: "translateY(1px)",
            backgroundColor: "#8f8f8f",
            width: "30px",
            height: "15px",
          }}
        >
          &nbsp;
        </div>
        <span>5,000,000 - 10,000,000 tons CO2</span>
      </div>

      <div
        className="legend-item"
        style={{ marginLeft: "5px", display: "flex", marginBottom: "5px" }}
      >
        <div
          className="color-box"
          style={{
            border: "1px solid black",
            marginRight: "15px",
            transform: "translateY(1px)",
            backgroundColor: "#585757",
            width: "30px",
            height: "15px",
          }}
        >
          &nbsp;
        </div>
        <span>10,000,000 - 15,000,000 tons CO2</span>
      </div>

      <div
        className="legend-item"
        style={{ marginLeft: "5px", display: "flex", marginBottom: "5px" }}
      >
        <div
          className="color-box"
          style={{
            border: "1px solid black",
            marginRight: "15px",
            transform: "translateY(1px)",
            backgroundColor: "#1b1b1b",
            width: "30px",
            height: "15px",
          }}
        >
          &nbsp;
        </div>
        <span>15,000,000+ tons CO2</span>
      </div>
    </div>
  );
}

function AdditionalSection2() {
  return (
    <div
      className="additional-section"
      style={{ backgroundColor: "#d3d3d3", width: "100vw", height: "auto" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "50px",
          paddingRight: "50px",
          paddingTop: "50px",
        }}
      >
        <img
          src={climatepic}
          alt="Climate Change"
          style={{
            width: "40vw",
            height: "auto",
            marginRight: "50px",
            transform: "translateY(20px)",
          }}
        />
        <div>
          <h2 style={{ textAlign: "left", color: "black" }}>
            Understanding Climate Change
          </h2>
          <p
            style={{
              textAlign: "left",
              lineHeight: "1.5",
              marginTop: "20px",
              color: "black",
            }}
          >
            Climate change refers to long-term changes in the average weather
            patterns that have come to define Earth's local, regional, and
            global climates. These changes are largely driven by human
            activities, such as burning fossil fuels, deforestation, and
            industrial processes, which release greenhouse gases like carbon
            dioxide (CO2), methane (CH4), and nitrous oxide (N2O) into the
            atmosphere. These gases trap heat from the sun, leading to a gradual
            increase in global temperatures known as global warming.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "10px",
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        <div>
          <h2 style={{ textAlign: "left", color: "black" }}>
            Carbon Sequestration to Mitigate Climate Change
          </h2>
          <p
            style={{
              textAlign: "left",
              lineHeight: "1.5",
              marginTop: "20px",
              color: "black",
            }}
          >
            Carbon sequestration is the process of capturing and storing carbon
            dioxide to prevent its release into the atmosphere. This can be
            achieved through natural processes such as planting trees, as well
            as through technological methods like carbon capture and storage
            (CCS) in industrial facilities. <br />
            <br />
            Carbon sequestration is vital for mitigating climate change by
            reducing the concentration of greenhouse gases in the atmosphere,
            thereby helping to limit global warming and its associated impacts
            on ecosystems, weather patterns, and human societies.
          </p>
        </div>
        <img
          src={sequestpic}
          alt="Climate Change"
          style={{
            width: "40vw",
            height: "auto",
            marginLeft: "50px",
            transform: "translateY(-20px)",
          }}
        />
      </div>
    </div>
  );
}

function Reforestation() {
  return (
    <div
      className="reforestation-section"
      style={{
        backgroundColor: "#dbd5d0", 
        padding: "50px 0", 
        display: "flex",
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center",
        gap: "20px", 
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333", fontSize: "2em" }}>
        Reforestation
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around", 
          alignItems: "stretch", 
          flexWrap: "wrap", 
          maxWidth: "1200px", 
          margin: "0 auto", 
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column", 
            justifyContent: "space-between", 
            flex: "1 1 300px", 
            margin: "10px", 
            padding: "20px", 
            backgroundColor: "rgba(255, 255, 255, 0.9)", 
            borderRadius: "8px", 
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
          }}
        >
          <img
            src={refore2}
            alt="Climate Change"
            style={{ width: "100%", height: "350px", borderRadius: "8px" }}
          />
          <p
            style={{ textAlign: "left", lineHeight: "1.6", marginTop: "15px" }}
          >
            The{" "}
            <a
              href="https://www.edenprojects.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "#3bbeff",
                fontWeight: "bold",
              }}
            >
              Eden Reforestation Projects{" "}
            </a>
            is a non-profit organization focused on global reforestation and
            ecological restoration. Founded with the mission to alleviate
            extreme poverty and restore healthy forests, the organization
            employs local people in reforestation projects across various
            countries. These projects not only help in capturing atmospheric
            carbon but also restore native ecosystems, thus enhancing
            biodiversity and rebuilding natural habitats​​.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column", 
            justifyContent: "space-between", 
            flex: "1 1 300px", 
            margin: "10px", 
            padding: "20px", 
            backgroundColor: "rgba(255, 255, 255, 0.9)", 
            borderRadius: "8px", 
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
          }}
        >
          <img
            src={refore3}
            alt="Climate Change"
            style={{ width: "100%", height: "350px", borderRadius: "8px" }}
          />
          <p
            style={{ textAlign: "left", lineHeight: "1.6", marginTop: "15px" }}
          >
            Support the transformative reforestation efforts across the United
            States with{" "}
            <a
              href="https://onetreeplanted.org/collections/united-states"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "#3bbeff",
                fontWeight: "bold",
              }}
            >
              One Tree Planted
            </a>
            , a leading environmental non-profit dedicated to global
            reforestation. Our partnership focuses on replanting native trees in
            regions devastated by natural disasters, deforestation, and
            industrial impacts. Each tree planting initiative helps to restore
            biodiversity, improve air and water quality, and reduce the effects
            of climate change. You can make a difference!
          </p>
        </div>
      </div>
    </div>
  );
}

function DAC() {
  return (
    <div
      className="additional-section"
      style={{ backgroundColor: "#f0f4f8", width: "100vw", minHeight: "500px" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "50px",
          paddingRight: "50px",
          paddingTop: "50px",
        }}
      >
        <img
          src={dac1}
          alt="Climate Change"
          style={{
            width: "40vw",
            height: "auto",
            marginTop: "-10px",
            marginRight: "50px",
            transform: "translateY(20px)",
          }}
        />
        <div>
          <h2
            style={{
              transform: "translateX(-320px) translateY(-60px)",
              textAlign: "center",
              color: "#333",
              fontSize: "2em",
              marginTop: "45px",
            }}
          >
            Direct Air Capture
          </h2>

          <p
            style={{
              textAlign: "left",
              lineHeight: "1.5",
              marginTop: "-60px",
              color: "black",
            }}
          >
            Direct air capture (DAC) is a technology designed to filter and
            remove carbon dioxide (CO2) directly from the atmosphere. This
            process involves using large machines that pull in ambient air, then
            through a series of chemical reactions, selectively absorb the CO2.
            Once captured, the CO2 can be permanently stored underground in
            geological formations or utilized in various industrial
            applications, such as the production of synthetic fuels and other
            materials.
            <br /> <br />
            <a
              href="https://cowboystatedaily.com/2024/04/07/carbon-capture-project-in-southwest-wyoming-vies-for-1-billion-to-clean-up-air/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "#3bbeff",
                fontWeight: "bold",
              }}
            >
              Project Bison{" "}
            </a>
            is a pioneering carbon capture initiative by CarbonCapture Inc.,
            aimed at establishing one of the world's largest direct air capture
            and storage facilities in southwestern Wyoming. This ambitious
            project seeks to secure $1 billion in funding from the Department of
            Energy to advance its development. The initiative's goal is to
            significantly reduce atmospheric carbon dioxide by capturing it
            directly from the air and securely storing it underground.
          </p>
        </div>
      </div>
    </div>
  );
}

function BlueCarbon() {
  return (
    <div
      className="blue-carbon-section"
      style={{
        backgroundColor: "#f0f4f8", 
        paddingTop: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "100vh", 
      }}
    >
      <h1
        style={{
          color: "#205375", 
          fontSize: "3rem", 
          textAlign: "center",
        }}
      >
        Blue Carbon Initiatives
      </h1>

      <img
        src={bluecarb2}
        alt="Blue Carbon Ecosystem"
        style={{
          width: "100vw", 
          maxHeight: "500px", 
          objectFit: "cover",
          height: "380px",
          transform: "translateY(-170px)", 
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)", 
        }}
      />

      <p
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.8",
          marginTop: "-260px",
          transform: "translateY(-10px)",
          marginLeft: "150px",
          marginRight: "150px",
        }}
      >
        The{" "}
        <a
          href="https://www.thebluecarboninitiative.org/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "#3bbeff",
            fontWeight: "bold",
          }}
        >
          Blue Carbon Initiative{" "}
        </a>{" "}
        is a globally coordinated effort focused on mitigating climate change by
        conserving and restoring coastal ecosystems like mangroves, tidal
        marshes, and seagrass meadows. These ecosystems are significant because
        they store large amounts of carbon, both in the plants and in the
        sediment below them, which helps in reducing the atmospheric carbon
        dioxide levels. The initiative involves a range of activities including
        the development of field-based projects that demonstrate the viability
        of blue carbon as a conservation and management approach. These projects
        are crucial for developing practical, science-based methodologies and
        for building local and national capacity to manage and protect coastal
        ecosystems effectively.
      </p>
    </div>
  );
}

function AdditionalSection() {
  return (
    <div
      className="additional-section"
      style={{ backgroundColor: "#d3d3d3", width: "100vw", height: "auto" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "50px",
          paddingRight: "50px",
          paddingTop: "50px",
        }}
      >
        <img
          src={climatepic}
          alt="Climate Change"
          style={{
            width: "40vw",
            height: "auto",
            marginRight: "50px",
            transform: "translateY(20px)",
          }}
        />
        <div>
          <h2 style={{ textAlign: "left", color: "black" }}>
            Understanding Climate Change
          </h2>
          <p
            style={{
              textAlign: "left",
              lineHeight: "1.5",
              marginTop: "20px",
              color: "black",
            }}
          >
            Climate change refers to long-term changes in the average weather
            patterns that have come to define Earth's local, regional, and
            global climates. These changes are largely driven by human
            activities, such as burning fossil fuels, deforestation, and
            industrial processes, which release greenhouse gases like carbon
            dioxide (CO2), methane (CH4), and nitrous oxide (N2O) into the
            atmosphere. These gases trap heat from the sun, leading to a gradual
            increase in global temperatures known as global warming.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "10px",
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        <div>
          <h2 style={{ textAlign: "left", color: "black" }}>
            Carbon Sequestration to Mitigate Climate Change
          </h2>
          <p
            style={{
              textAlign: "left",
              lineHeight: "1.5",
              marginTop: "20px",
              color: "black",
            }}
          >
            Carbon sequestration is the process of capturing and storing carbon
            dioxide to prevent its release into the atmosphere. This can be
            achieved through natural processes such as planting trees, as well
            as through technological methods like carbon capture and storage
            (CCS) in industrial facilities. <br />
            <br />
            Carbon sequestration is vital for mitigating climate change by
            reducing the concentration of greenhouse gases in the atmosphere,
            thereby helping to limit global warming and its associated impacts
            on ecosystems, weather patterns, and human societies.
          </p>
        </div>
        <img
          src={sequestpic}
          alt="Climate Change"
          style={{
            width: "40vw",
            height: "auto",
            marginLeft: "50px",
            transform: "translateY(-20px)",
          }}
        />
      </div>
    </div>
  );
}

function Projects() {
  const svgRef = useRef(null);

  useEffect(() => {
    const width = 1280;
    const height = 800;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    const projection = d3
      .geoAlbersUsa()
      .translate([width / 2, height / 2 - 40])
      .scale(1200);

    const path = d3.geoPath().projection(projection);

    Promise.all([d3.json("geodata.json"), d3.csv("emissions.csv")]).then(
      ([usMap, co2Data]) => {
        svg
          .selectAll("path")
          .data(usMap.features)
          .enter()
          .append("path")
          .attr("d", path)
          .attr("class", "state")
          .style("fill", "#e4e3e3")
          .style("stroke", "black") 
          .style("stroke-width", 1);

        const maxCO2 = d3.max(co2Data, (d) => +d["CO2(Metric Tons)"]);

        const colorScale = d3
          .scaleLinear()
          .domain([0, 15000000]) 
          .range(["white", "black"]); 

        const slider = document.getElementById("slider");
        const yearDisplay = document.getElementById("year-display");
        const autoSlideBtn = document.getElementById("auto-slide-btn");
        const pauseBtn = document.getElementById("pause-btn");
        slider.style.display = "none";

        let interval = null;
        let year = 1990;

        function updateYear() {
          year++;
          if (year > 2022) {
            clearInterval(interval); 
          } else {
            slider.value = year; 
            yearDisplay.textContent = `Year: ${year}`; 
            svg.selectAll(".state").style("fill", (d) => {
              const stateName = d.properties.NAME;
              const stateData = co2Data.find(
                (item) => item.State === stateName && +item.Year === year
              );

              if (stateData && stateData["CO2(Metric Tons)"]) {
                return colorScale(+stateData["CO2(Metric Tons)"]);
              }
            });
          }
        }

        autoSlideBtn.addEventListener("click", function () {
          if (year >= 2022) {
            year = 1990;
            clearInterval(interval);
            interval = setInterval(updateYear, 700);
          }
          if (!interval) {
            interval = setInterval(updateYear, 700); 
          }
        });

        pauseBtn.addEventListener("click", function () {
          clearInterval(interval); 
          interval = null;
        });
      }
    );
  }, []);

  return (
    <div className="App" style={{ backgroundColor: "#282C34" }}>
      <Navbar />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      ></link>

      <style>
        {`
                    .btn {
                        display: inline-block;
                        background: #3bbeff;
                        color: white;
                        padding: 8px 30px;
                        margin: 10px 0px;
                        border-radius: 25px;
                        transition: background 0.5s;
                        border: none; /* Remove border */
                        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Add background shadow */
                        width: auto;
                    }
                    .btn:hover {
                        background: #344956;
                    }

                    .body {
                        font-family: 'Poppins', sans-serif;
                        min-width: 1080px;
                    }
                `}
      </style>
      <div style={{ height: "100vh", minHeight: "900px", maxWidth: "100vw" }}>
        <h1
          style={{
            color: "white",
            width: "2000px",
            transform: "translateX(500px)",
            fontWeight: "light",
            fontSize: "48px",
            paddingTop: "15px",
          }}
        >
          <br />
          CO2 Emissions by State
        </h1>
        <svg ref={svgRef}></svg>
        <div id="slider-container">
          <input type="range" min="1990" max="2022" value="1990" id="slider" />
          <div
            style={{
              transform: "translateX(700px) translateY(-780px)",
              color: "white",
              width: "2000px",
              fontSize: "28px",
            }}
            id="year-display"
          >
            Year: 1990
          </div>
        </div>
        <Legend />
        <button
          className="btn"
          id="pause-btn"
          style={{
            fontSize: "24px",
            transform: "translateX(850px) translateY(-980px)",
          }}
        >
          Pause
        </button>
        <button
          className="btn"
          id="auto-slide-btn"
          style={{
            fontSize: "24px",
            transform: "translateY(-980px) translateX(420px)",
            marginLeft: "20px",
          }}
        >
          Play
        </button>
      </div>

      <AdditionalSection />
      <BlueCarbon />
      <Reforestation />
      <DAC />
    </div>
  );
}

export default Projects;
