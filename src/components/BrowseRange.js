import React from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import dining from "../assets/dining.png";
import living from "../assets/living.png";
import bedroom from "../assets/bedroom.png";

const ranges = [
  { title: "Dining", img: dining },
  { title: "Living", img: living },
  { title: "Bedroom", img: bedroom },
];

function BrowseRange() {
  return (
    <Box sx={{ py: 10, px: { xs: 2, md: 10 }, textAlign: "center" }}>
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: 700,
          fontSize: 28,
          mb: 2,
        }}
      >
        Browse The Range
      </Typography>
      <Typography sx={{ color: "#777", fontFamily: "Poppins", mb: 6 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {ranges.map((range, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: "none", borderRadius: 0 }}>
              <CardMedia
                component="img"
                height="400" // Increased height
                image={range.img}
                alt={range.title}
                sx={{
                  borderRadius: 0, // No rounded corners
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.03)" },
                }}
              />
              <CardContent>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    mt: 1,
                    fontSize: 18,
                  }}
                >
                  {range.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default BrowseRange;
