import React from "react";
import { Box, Typography, Grid, TextField, Button, Divider } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        pt: 10,
        pb: 4,
        px: { xs: 3, md: 10 },
        borderTop: "1px solid #E0E0E0",
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          maxWidth: "1300px",
          margin: "0 auto",
          justifyContent: "space-between",
        }}
      >
        {/* --- Column 1: Brand Info --- */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 700,
              fontSize: 20,
              mb: 2,
            }}
          >
            Funiro.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              color: "#666",
              fontSize: 14,
              lineHeight: 1.8,
            }}
          >
            400 University Drive Suite 200 Coral Gables,  
            FL 33134 USA
          </Typography>
        </Grid>

        {/* --- Column 2: Links --- */}
        <Grid item xs={6} sm={3} md={2}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: 16,
              mb: 2,
            }}
          >
            Links
          </Typography>
          {["Home", "Shop", "About", "Contact"].map((item) => (
            <Typography
              key={item}
              sx={{
                fontFamily: "Poppins",
                color: "#666",
                fontSize: 14,
                lineHeight: 2,
                cursor: "pointer",
                "&:hover": { color: "#B88E2F" },
              }}
            >
              {item}
            </Typography>
          ))}
        </Grid>

        {/* --- Column 3: Help --- */}
        <Grid item xs={6} sm={3} md={2}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: 16,
              mb: 2,
            }}
          >
            Help
          </Typography>
          {["Payment Options", "Returns", "Privacy Policies"].map((item) => (
            <Typography
              key={item}
              sx={{
                fontFamily: "Poppins",
                color: "#666",
                fontSize: 14,
                lineHeight: 2,
                cursor: "pointer",
                "&:hover": { color: "#B88E2F" },
              }}
            >
              {item}
            </Typography>
          ))}
        </Grid>

        {/* --- Column 4: Newsletter --- */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: 16,
              mb: 2,
            }}
          >
            Newsletter
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid #000",
              width: "100%",
              maxWidth: 300,
            }}
          >
            <TextField
              variant="standard"
              placeholder="Enter Your Email Address"
              InputProps={{
                disableUnderline: true,
                sx: {
                  fontFamily: "Poppins",
                  fontSize: 14,
                  color: "#555",
                  flexGrow: 1,
                },
              }}
            />
            <Button
              sx={{
                fontFamily: "Poppins",
                fontSize: 14,
                fontWeight: 600,
                color: "#000",
                textTransform: "none",
              }}
            >
              SUBSCRIBE
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* --- Divider Line --- */}
      <Divider sx={{ my: 4, borderColor: "#E0E0E0" }} />

      {/* --- Copyright --- */}
      <Box
        sx={{
          textAlign: "left",
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: 14,
            fontWeight: 600,
            color: "#000",
          }}
        >
          © 2023 Funiro. All rights reserved
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
