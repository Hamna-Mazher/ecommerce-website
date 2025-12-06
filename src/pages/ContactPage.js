import React, { useState } from "react";
import { Box, Container, Grid, TextField, Typography, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hero from "../assets/hero-bg.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("Message submitted!");
  };

  return (
    <>
    

      {/* Hero Section */}
      <Box
        sx={{
          height: "300px",
          width: "100%",
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "black",
          textAlign: "center",
        }}
      >
        <Typography sx={{ fontFamily: "Poppins", fontSize: "2.2rem", mb: 1, fontWeight: 600 }}>
          Contact
        </Typography>
        <Typography sx={{ fontFamily: "Poppins", fontSize: "0.9rem", color: "#666" }}>
          Home &gt; Contact
        </Typography>
      </Box>

      {/* Main Contact Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "2rem",
              fontWeight: 700,
              mb: 2,
            }}
          >
            Get In Touch With Us
          </Typography>
          <Typography
            sx={{
              maxWidth: "650px",
              mx: "auto",
              fontFamily: "Poppins",
              fontSize: "0.95rem",
              color: "#6c6c6c",
            }}
          >
            For more information about our products & services, please feel free to drop us an email.
            Our staff is always here to help you. Don’t hesitate!
          </Typography>
        </Box>

        {/* Content Row */}
        <Grid container spacing={10} alignItems="flex-start">
          
          {/* Left Info Column */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", gap: 2, mb: 5 }}>
              <LocationOnIcon sx={{ color: "#B88E2F", fontSize: 32 }} />
              <Box>
                <Typography sx={{ fontFamily: "Poppins", fontWeight: 600, mb: 1 }}>
                  Address
                </Typography>
                <Typography sx={{ fontFamily: "Poppins", color: "#666" }}>
                  236 5th SE Avenue, New<br />York NY10000, United States
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", gap: 2, mb: 5 }}>
              <PhoneIcon sx={{ color: "#B88E2F", fontSize: 32 }} />
              <Box>
                <Typography sx={{ fontFamily: "Poppins", fontWeight: 600, mb: 1 }}>
                  Phone
                </Typography>
                <Typography sx={{ fontFamily: "Poppins", color: "#666" }}>
                  Mobile: (+84) 546-6789<br />Hotline: (+84) 456-6789
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <AccessTimeIcon sx={{ color: "#B88E2F", fontSize: 32 }} />
              <Box>
                <Typography sx={{ fontFamily: "Poppins", fontWeight: 600, mb: 1 }}>
                  Working Time
                </Typography>
                <Typography sx={{ fontFamily: "Poppins", color: "#666" }}>
                  Monday–Friday: 9:00 - 22:00<br />
                  Saturday–Sunday: 9:00 - 21:00
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right Form Column */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  fullWidth
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  fullWidth
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="subject"
                  fullWidth
                  placeholder="This is an optional"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="message"
                  fullWidth
                  multiline
                  rows={5}
                  placeholder="Hi! I’d like to ask about..."
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{
                    backgroundColor: "#B88E2F",
                    fontFamily: "Poppins",
                    px: 8,
                    py: 1.3,
                    textTransform: "none",
                    borderRadius: 0,
                    fontWeight: 600,
                    "&:hover": { backgroundColor: "#a07828" },
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
 {/* ---------- FEATURES STRIP ---------- */}
      <Box
        sx={{
          backgroundColor: "#FAF3EA",
          mt: 8,
          py: 6,
          px: { xs: 2, md: 10 },
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 4,
        }}
      >
        {[
          "High Quality",
          "Warranty Protection",
          "Free Shipping",
          "24/7 Support",
        ].map((item, index) => (
          <Box key={index}>
            <Typography
              sx={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 18 }}
            >
              {item}
            </Typography>
            <Typography sx={{ fontFamily: "Poppins", color: "#555" }}>
              Lorem ipsum dolor sit amet.
            </Typography>
          </Box>
        ))}
      </Box>
      <Footer />
    </>
  );
};

export default Contact;
