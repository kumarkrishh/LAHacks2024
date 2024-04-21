import { React, useEffect, useState } from "react";
import { Button, Container, Typography, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { postData, fetchData } from "../../api";
import Navbar from "../navbar/Navbar";

const Register = () => {
  useEffect(() => {
    fetchData();
  }, []);
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const [passwordMessage, setPasswordMessage] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const strongPasswordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/;

  const checkPasswordStrength = (password) => {
    if (strongPasswordRegex.test(password)) {
      setPasswordMessage('Strong password');
      setIsButtonDisabled(false);
    } else {
      setPasswordMessage(
        'Password should contain at least one special character, one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long.'
      );
      setIsButtonDisabled(true);
    }
  };

  const submitData = async (e) => {
    try {
      e.preventDefault();
      console.log("submit route reached");
      await postData({ firstName, lastName, email, password });
      setError("");
      navigate('/login');
    } catch (error) {
        console.log("frontend reached: ", error.response);
        if (error.response && error.response.status === 400) {
          setError("Email already exists. Please enter a new email!");
        } else {
          setError("An unexpected error occurred. Please try again.");
        }
      }
    };

  return (
    <div>
      <Navbar />
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
            paddingBottom: 20,
            backgroundColor: "rgba(240, 240, 240, 0.68)",
            borderRadius: 8,
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            width: "80vh",
            height: '75vh'
          }}
        >
          <div
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ color: "green" }}>
              Sign Up
            </Typography>
            <form onSubmit={submitData}>
              <TextField
                label="First Name"
                variant="outlined"
                sx={{ marginBottom: 2 }}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <TextField
                label="Last Name"
                variant="outlined"
                sx={{ marginBottom: 2 }}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                sx={{ marginBottom: 2 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Typography variant="h7" gutterBottom sx={{ color: "green" }}>
                {passwordMessage}
              </Typography>
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                sx={{ marginBottom: 2 }}
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
                Sign Up
              </Button>
              {error && (
              <div style={{ color: "red", marginTop: '2vh' }}>
                {error}
              </div>
            )}
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Register;
