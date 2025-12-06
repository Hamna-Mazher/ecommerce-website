import React from "react";
import { Box, Typography } from "@mui/material";
import setup from "../assets/setup.png"; // your exported full collage image

function SetupSection() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: "#fff",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontSize: { xs: 14, md: 16 },
          color: "#555",
        }}
      >
        Share your setup with
      </Typography>
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontSize: { xs: 22, md: 28 },
          fontWeight: 600,
          mb: 6,
          color: "#333",
        }}
      >
        #FuniroFurniture
      </Typography>

      {/* Collage Image */}
      <Box
        sx={{
          maxWidth: "1400px",
          width: "100%",
          mx: "auto",
          overflow: "hidden",
        }}
      >
        <img
          src={setup}
          alt="Setup Collage"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>
    </Box>
  );
}

export default SetupSection;
