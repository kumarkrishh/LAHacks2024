import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField, Container, Typography } from "@mui/material";

import styles from "./stylelogin.css";
import { signin } from "../../api";
import Navbar from "../navbar/Navbar";
import { useAuth } from "../../AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //const [login, setLogin] = useState(false);

  const navigate = useNavigate();

  const {login} = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signin({ email, password });
      console.log("successful login");
      setError("");
      login();
      navigate("/projects");
    } catch (error) {
      console.log("error: ", error.message);
      handleError(error);
    }
    console.log("Form submitted:", email, password);
  };
  const handleError = (error) => {
    switch (error.message) {
      case "404":
        setError("Email doesn't exist. Please try again. ");
        break;
      case "401":
        setError("Password doesn't match. Please try again. ");
        break;
      default:
        setError("No account exists with this username/password.");
    }
  };

  return (
    <div className={styles.body}
    >
     <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />

      <Navbar/>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "90vh",
          paddingTop: "20vh",
        }}
      >
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
          }}
        >
          <div>
            <Typography variant="h3" gutterBottom sx={{ color: "green" }}>
              Sign In
            </Typography>
            <div
              style={{
                margin: "3vh",
              }}
            >
              <form onSubmit={handleSubmit}>
                {error && (
                  <div style={{ color: "red", marginBottom: "3vh" }}>
                    {error}
                  </div>
                )}
                <TextField
                  label="Email"
                  variant="outlined"
                  sx={{ marginBottom: "5vh" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  sx={{ marginBottom: "5vh" }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: "#a6c7ff", // Light blue color
                    color: "#fff", // White text color
                    padding: "10px 20px",
                    borderRadius: 8,
                    border: "none",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                    transition: "background-color 0.75s ease",
                    textDecoration: "none",
                    display: "inline-block",
                    textAlign: "center",
                    fontSize: 16,
                    fontWeight: "bold",
                    lineHeight: "normal",
                    textTransform: "uppercase",
                    outline: "none",
                  }}
                >
                  Sign In
                </Button>
                <div style={{ marginTop: "2vh" }}>
                  <Typography variant="h7" gutterBottom sx={{ color: "green" }}>
                    Dont have an account? Create one now!
                  </Typography>
                  <Link to="/register" style={{ fontSize: "16px" }}>
                    {" "}
                    Create an account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Login;
