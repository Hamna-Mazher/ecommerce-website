import React from "react";
import { Box, Typography, Grid, MenuItem, Select, Button, Card, CardMedia, CardContent } from "@mui/material";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import hero from "../assets/hero-bg.jpg";
import Footer from "../components/Footer";

// --- SAMPLE PRODUCTS ---
const products = [
  { id: 1, name: "Syltherine", price: "Rp 2.500.000", img: product1 },
  { id: 2, name: "Leviosa", price: "Rp 2.500.000", img: product2 },
  { id: 3, name: "Lolito", price: "Rp 7.000.000", img: product3 },
  { id: 4, name: "Respira", price: "Rp 500.000", img: product4 },
  { id: 5, name: "Syltherine", price: "Rp 2.500.000", img: product1 },
  { id: 6, name: "Leviosa", price: "Rp 2.500.000", img: product2 },
  { id: 7, name: "Lolito", price: "Rp 7.000.000", img: product3 },
  { id: 8, name: "Respira", price: "Rp 500.000", img: product4 },
  { id: 9, name: "Syltherine", price: "Rp 2.500.000", img: product1 },
  { id: 10, name: "Leviosa", price: "Rp 2.500.000", img: product2 },
  { id: 11, name: "Lolito", price: "Rp 7.000.000", img: product3 },
  { id: 12, name: "Respira", price: "Rp 500.000", img: product4 },
   { id: 13, name: "Leviosa", price: "Rp 2.500.000", img: product1 },
  { id: 14, name: "Lolito", price: "Rp 7.000.000", img: product2 },
  { id: 15, name: "Respira", price: "Rp 500.000", img: product3 },
];

function Shop() {
  return (
    <>
    <Box sx={{ pb: 10 }}>

   {/* HERO SECTION */}
<Box
  sx={{
    width: "100%",
    height: "300px",
    backgroundImage: `url(${hero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mb: 5,
  }}
>
  <Typography
    variant="h3"
    sx={{
      fontWeight: 600,
      color: "#333",
      textShadow: "0px 0px 5px #fff",
    }}
  >
    Shop
  </Typography>
</Box>

      {/* ---------- FILTER BAR ---------- */}
      <Box
        sx={{
          px: { xs: 2, md: 10 },
          py: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#F9F1E7",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Typography sx={{ fontFamily: "Poppins", fontSize: 14 }}>
          Showing 1–12 of {products.length} results
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Select defaultValue="shop" sx={{ background: "#FFF" }}>
            <MenuItem value="shop">Shop</MenuItem>
            <MenuItem value="popular">Popular</MenuItem>
            <MenuItem value="latest">Latest</MenuItem>
          </Select>

          <Select defaultValue="price" sx={{ background: "#FFF" }}>
            <MenuItem value="price">Price</MenuItem>
            <MenuItem value="low">Low to High</MenuItem>
            <MenuItem value="high">High to Low</MenuItem>
          </Select>
        </Box>
      </Box>
{/* ---------- PRODUCT GRID ---------- */}
<Box 
  sx={{ 
    px: { xs: 2, md: 10 }, 
    mt: 4,
    maxWidth: "1400px",
    margin: "0 auto"
  }}
>
  <Grid 
    container 
    spacing={4}
    columns={{ xs: 4, sm: 8, md: 12 }}
  >
    {products.map((p) => (
      <Grid 
        item 
        xs={4}      // 1 per row (mobile)
        sm={4}      // 2 per row (tablet)
        md={3}      // 4 per row (desktop)
        key={p.id}
      >
        <Card sx={{ boxShadow: "none", borderRadius: 0 }}>
          <CardMedia
            component="img"
            height="250"
            image={p.img}
            alt={p.name}
            sx={{ borderRadius: 0 }}
          />
          <CardContent>
            <Typography sx={{ fontFamily: "Poppins", fontWeight: 600 }}>
              {p.name}
            </Typography>
            <Typography sx={{ fontFamily: "Poppins", color: "#555" }}>
              {p.price}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>

      {/* ---------- PAGINATION ---------- */}
      <Box sx={{ mt: 5, display: "flex", justifyContent: "center", gap: 2 }}>
        <Button sx={{ background: "#B88E2F", color: "#FFF", px: 3 }}>1</Button>
        <Button sx={{ background: "#F9F1E7", color: "#000", px: 3 }}>2</Button>
        <Button sx={{ background: "#F9F1E7", color: "#000", px: 3 }}>3</Button>
        <Button sx={{ background: "#F9F1E7", color: "#000", px: 3 }}>Next</Button>
      </Box>

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
   
    </Box>
       
      {/* FOOTER */}
      <Footer />
          </>
  );
}

export default Shop;