import React from "react";
import { Box, Typography, Button } from "@mui/material";
import hero from "../assets/hero-bg.jpg"
function HeroSection() {
  return (
    <Box
      sx={{
       backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: { xs: "80vh", md: "90vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        px: { xs: 2, md: 10 },
      }}
    >
      <Box
        sx={{
          backgroundColor: "#FFF3E3",
          p: 5,
          borderRadius: 2,
          maxWidth: 400,
        }}
      >
        <Typography sx={{ color: "#333", fontFamily: "Poppins", fontSize: 14, fontWeight: 500 }}>
          New Arrival
        </Typography>
        <Typography
          sx={{
            color: "#B88E2F",
            fontFamily: "Poppins",
            fontSize: 36,
            fontWeight: 700,
            my: 1,
          }}
        >
          Discover Our New Collection
        </Typography>
        <Typography sx={{ color: "#333", fontFamily: "Poppins", fontSize: 14, mb: 3 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#B88E2F",
            color: "#FFF",
            fontFamily: "Poppins",
            px: 4,
            py: 1.5,
            borderRadius: 0,
            "&:hover": { backgroundColor: "#A67922" },
          }}
        >
          Buy Now
        </Button>
      </Box>
    </Box>
  );
}

export default HeroSection;
