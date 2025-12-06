import React from "react";
import { Box, Typography, Grid, Paper, Button, Divider } from "@mui/material";
import product1 from "../assets/product1.png"// your product image
import hero from "../assets/hero-bg.jpg";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
function CartPage() {
  return (
    <>
      {/* ---------- HERO SECTION ---------- */}
      <Box
        sx={{
           backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          py: 8,
          color: "#000",
        }}
      >
        <Typography variant="h4" sx={{ fontFamily: "Poppins", fontWeight: 600 }}>
          Cart
        </Typography>
        <Typography sx={{ fontFamily: "Poppins", color: "#666" }}>
          Home &gt; Cart
        </Typography>
      </Box>

      {/* ---------- MAIN CONTENT ---------- */}
      <Box sx={{ px: { xs: 2, md: 10 }, py: 6 }}>
        <Grid container spacing={4}>
          {/* LEFT: CART ITEMS */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3, boxShadow: "none", borderRadius: 2 }}>
              {/* Table Header */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr 1fr 1fr",
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  borderBottom: "1px solid #eee",
                  pb: 1,
                  mb: 2,
                  textAlign: "center",
                }}
              >
                <Typography>Product</Typography>
                <Typography>Price</Typography>
                <Typography>Quantity</Typography>
                <Typography>Subtotal</Typography>
              </Box>

              {/* Single Product Row */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr 1fr 1fr",
                  alignItems: "center",
                  fontFamily: "Poppins",
                  mb: 2,
                  textAlign: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <img src={product1} alt="Product" style={{ width: 80, height: 80 }} />
                  <Typography>Syltherine</Typography>
                </Box>
                <Typography>Rs. 25,000.00</Typography>
                <Typography>1</Typography>
                <Typography fontWeight={600}>Rs. 25,000.00</Typography>
              </Box>
            </Paper>
          </Grid>

          {/* RIGHT: CART TOTALS */}
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 4,
                boxShadow: "none",
                borderRadius: 2,
                backgroundColor: "#F9F1E7",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontFamily: "Poppins", fontWeight: 600, mb: 3 }}
              >
                Cart Totals
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                <Typography sx={{ fontFamily: "Poppins", color: "#777" }}>
                  Subtotal
                </Typography>
                <Typography sx={{ fontFamily: "Poppins" }}>
                  Rs. 25,000.00
                </Typography>
              </Box>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
                <Typography sx={{ fontFamily: "Poppins", fontWeight: 600 }}>
                  Total
                </Typography>
                <Typography sx={{ fontFamily: "Poppins", fontWeight: 600 }}>
                  Rs. 25,000.00
                </Typography>
              </Box>

             <Link to="/checkout" style={{ textDecoration: "none" }}>
  <Button
    variant="outlined"
    sx={{
      fontFamily: "Poppins",
      textTransform: "none",
      borderRadius: 1,
      px: 4,
      width: "100%",
    }}
  >
    Check Out
  </Button>
</Link>

            </Paper>
          </Grid>
        </Grid>
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
              
                  {/* FOOTER */}
                  <Footer />
    </>
  );
}

export default CartPage;
