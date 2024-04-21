import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/dashboard/Dashboard";
import FootprintCalc from "./components/footprint/FootprintCalc";
import Projects from "./components/projects/Projects";
import Plants from "./components/plantRecognition/Plants";
import Scanner from "./scanner/Scanner";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/footprintcalc" element={<FootprintCalc />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/plantRecognition" element={<Plants />} />
        <Route exact path="/scanner" element={<Scanner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
