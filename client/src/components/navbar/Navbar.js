import { React, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import { Button, Box } from "@mui/material";

const Navbar = () => {

  const { isLoggedIn, logout } = useAuth();

  const navigate = useNavigate();

  const logOut = () => {
    logout();
    console.log("logout successful");
    navigate("/");
  };
  return (
    <div>
      <div id="navbar">
        <Link to="/">Home</Link>
        {!isLoggedIn && <Link to="/login">Sign Up/Sign In</Link>}
        <Link to= "/projects">Projects</Link>
        {isLoggedIn && <Link to="/scanner">Scanner</Link>}
        {isLoggedIn && <Link to="/footprintcalc">Footprint Calculator</Link>}
        {isLoggedIn && <Link to="/plantRecognition">Plant Recognition</Link>}
        {isLoggedIn && (
              <button
                onClick={logOut}
                style={{
                  border: '5 px solid white',
                  color: "white",
                  background: "transparent",
                  maxWidth: '100vh',
                  transform: "translateY(-11.3vh) translateX(115vh)",
                  "&:hover": {
                    transform: "translateY(-9.6vh) translateX(115vh)",
                    color: "black",
                    backgroundColor: "transparent",
                    boxShadow: "inset 0 0 -10px 0 #3bbeff",

                  },
                  
                }}
              >
                Log Out
              </button>
        )}
        
      </div>
    </div>
  );
};

export default Navbar;

