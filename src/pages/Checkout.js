import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  Divider,
} from "@mui/material";
import hero from "../assets/hero-bg.jpg";
import product1 from "../assets/product1.png";
import Footer from "../components/Footer";

function CheckoutPage() {
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
          Checkout
        </Typography>
        <Typography sx={{ fontFamily: "Poppins", color: "#666" }}>
          Home &gt; Checkout
        </Typography>
      </Box>

      {/* ---------- MAIN CONTENT ---------- */}
      <Box sx={{ px: { xs: 2, md: 10 }, py: 8 }}>
        <Grid container spacing={6}>
          {/* ---------- LEFT: BILLING DETAILS ---------- */}
          <Grid item xs={12} md={7}>
            <Typography
              variant="h6"
              sx={{ fontFamily: "Poppins", fontWeight: 600, mb: 3 }}
            >
              Billing details
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField label="First Name" fullWidth size="small" />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Last Name" fullWidth size="small" />
              </Grid>

              <Grid item xs={12}>
                <TextField label="Company Name (Optional)" fullWidth size="small" />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  select
                  label="Country / Region"
                  fullWidth
                  size="small"
                  defaultValue="srilanka"
                >
                  <MenuItem value="srilanka">Sri Lanka</MenuItem>
                  <MenuItem value="pakistan">Pakistan</MenuItem>
                  <MenuItem value="india">India</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField label="Street Address" fullWidth size="small" />
              </Grid>

              <Grid item xs={12}>
                <TextField label="Town / City" fullWidth size="small" />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  select
                  label="Province"
                  fullWidth
                  size="small"
                  defaultValue="west"
                >
                  <MenuItem value="west">Western Province</MenuItem>
                  <MenuItem value="east">Eastern Province</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField label="ZIP code" fullWidth size="small" />
              </Grid>

              <Grid item xs={12}>
                <TextField label="Phone" fullWidth size="small" />
              </Grid>

              <Grid item xs={12}>
                <TextField label="Email address" fullWidth size="small" />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Additional information"
                  fullWidth
                  multiline
                  minRows={3}
                  size="small"
                />
              </Grid>
            </Grid>
          </Grid>

          {/* ---------- RIGHT: ORDER SUMMARY ---------- */}
          <Grid item xs={12} md={5}>
            <Paper
              sx={{
                p: 4,
                boxShadow: "none",
                borderRadius: 2,
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                <Typography sx={{ fontFamily: "Poppins", fontWeight: 600 }}>
                  Product
                </Typography>
                <Typography sx={{ fontFamily: "Poppins", fontWeight: 600 }}>
                  Subtotal
                </Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <Typography sx={{ fontFamily: "Poppins", color: "#444" }}>
                  Asgaard sofa × 1
                </Typography>
                <Typography sx={{ fontFamily: "Poppins" }}>Rs. 250,000.00</Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <Typography sx={{ fontFamily: "Poppins" }}>Subtotal</Typography>
                <Typography sx={{ fontFamily: "Poppins" }}>Rs. 250,000.00</Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
                <Typography sx={{ fontFamily: "Poppins", fontWeight: 600 }}>
                  Total
                </Typography>
                <Typography
                  sx={{ fontFamily: "Poppins", fontWeight: 600, color: "#b88e2f" }}
                >
                  Rs. 250,000.00
                </Typography>
              </Box>

              {/* PAYMENT SECTION */}
              <RadioGroup defaultValue="bank">
                <FormControlLabel
                  value="bank"
                  control={<Radio />}
                  label="Direct Bank Transfer"
                  sx={{ mb: 1 }}
                />
                <Typography sx={{ fontFamily: "Poppins", fontSize: 14, color: "#666", mb: 2 }}>
                  Make your payment directly into our bank account. Use your Order ID as
                  the payment reference.
                </Typography>

                <FormControlLabel
                  value="cod"
                  control={<Radio />}
                  label="Cash On Delivery"
                  sx={{ mb: 2 }}
                />
              </RadioGroup>

              <Typography sx={{ fontFamily: "Poppins", fontSize: 13, color: "#777", mb: 3 }}>
                Your personal data will be used to support your experience throughout
                this website, to manage access to your account, and for other purposes
                described in our privacy policy.
              </Typography>

              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  px: 4,
                  borderRadius: 1,
                }}
              >
                Place order
              </Button>
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

export default CheckoutPage;
