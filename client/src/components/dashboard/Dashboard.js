import React from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Card,
  Stack,
  Divider,
  Chip,
} from "@mui/material";

import Navbar from "../navbar/Navbar";

const Dashboard = () => {
  return (
    <div
    
      style={{
        display: "flex",
        justifyContent: "center",
        height: "90vh",
        paddingTop: "20vh",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <Navbar />
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          height: "75vh",
          borderRadius: 8,
          backgroundColor: "rgba(255, 255, 255, 0.5)", // White background with semi-transparency
        }}
      >
        <Box
          sx={{
            width: "45%",
            height: "80%",
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent container
            borderRadius: "8px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "green", marginBottom: "20px" }}
          >
            Total CO2 Emissions
          </Typography>
          <Typography variant="body1" sx={{ color: "grey" }}>
            Information about total CO2 emissions will be displayed here.
          </Typography>
          <div style={{paddingTop: '2vh'}}>
            <Card variant="outlined" sx={{ width: '40vh'}}>
              <Box sx={{ p: 2 }}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography gutterBottom variant="h6" component="div">
                    CO2 Emissions:
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    30gl
                  </Typography>
                </Stack>
                <Typography color="text.secondary" variant="body2">
                  More than average!
                </Typography>
              </Box>
              <Divider />
              <Box sx={{ p: 2 }}>
                <Typography gutterBottom variant="body2">
                  Emissions
                </Typography>
                <Stack direction="row" spacing={7}>
                  <Chip color="primary" label="Less" size="small" />
                  <Chip label="Average" size="small" />
                  <Chip label="More" size="small" />
                </Stack>
              </Box>
            </Card>
          </div>
        </Box>

        <Box
          sx={{
            width: "45%",
            height: "80%",
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent container
            borderRadius: "8px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "green", marginBottom: "20px" }}
          >
            Search
          </Typography>
          <TextField
            fullWidth
            label="Search..."
            variant="outlined"
            sx={{ marginBottom: "20px" }}
          />
          <Button
            variant="contained"
            sx={{ backgroundColor: "green", color: "white" }}
          >
            Search
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Dashboard;
