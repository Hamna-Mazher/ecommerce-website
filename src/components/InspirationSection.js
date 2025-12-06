import React from "react";
import { Box, Typography, Button } from "@mui/material";
import inspireImg from "../assets/inspireImg.png";
import inspireImg1 from "../assets/inspireImg1.png";

function InspirationSection() {
  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 2, md: 10 },
        backgroundColor: "#FFF3E3",
      }}
    >
      {/* PARENT FLEX CONTAINER */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // <-- horizontal on desktop
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1300px",
          margin: "0 auto",
          gap: { xs: 5, md: 8 },
        }}
      >
        {/* LEFT TEXT CONTENT */}
        <Box
          sx={{
            flex: "0 0 40%",
            display: "flex",
            flexDirection: "column",
            gap: 3,
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 700,
              fontSize: { xs: 26, md: 32 },
              lineHeight: 1.3,
              color: "#333",
            }}
          >
            50+ Beautiful Rooms Inspiration
          </Typography>

          <Typography
            sx={{
              fontFamily: "Poppins",
              color: "#555",
              fontSize: 15,
              lineHeight: 1.7,
              maxWidth: 400,
            }}
          >
            Our designers have already created many beautiful room prototypes to
            inspire you. Find ideas that match your style.
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "#B88E2F",
              color: "#FFF",
              fontFamily: "Poppins",
              px: 4,
              py: 1.5,
              borderRadius: 0,
              width: "fit-content",
              "&:hover": { backgroundColor: "#A67922" },
            }}
          >
            Explore More
          </Button>
        </Box>

        {/* RIGHT IMAGES */}
        <Box
          sx={{
            flex: "0 0 55%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Box
            component="img"
            src={inspireImg}
            alt="Inspiration 1"
            sx={{
              width: "48%",
              height: "auto",
              borderRadius: 0,
              objectFit: "cover",
            }}
          />
          <Box
            component="img"
            src={inspireImg1}
            alt="Inspiration 2"
            sx={{
              width: "48%",
              height: "auto",
              borderRadius: 0,
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default InspirationSection;
