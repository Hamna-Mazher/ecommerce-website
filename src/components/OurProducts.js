import React from "react";
import { useNavigate } from "react-router-dom";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  CardActions,
} from "@mui/material";

const products = [
  {
    id: 1,
    name: "Syltherine",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    description: "Stylish and comfortable furniture for modern living spaces",
    img: product1,
    category: "Chair",
    features: ["Premium Material", "Ergonomic Design", "Easy Maintenance"]
  },
  {
    id: 2,
    name: "Leviosa",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.000.000",
    description: "Elegant furniture piece with superior craftsmanship",
    img: product2,
    category: "Sofa",
    features: ["Luxury Fabric", "Solid Wood Frame", "Comfort Focused"]
  },
  {
    id: 3,
    name: "Lolito",
    price: "Rp 7.000.000",
    originalPrice: "Rp 8.500.000",
    description: "Luxury furniture with exceptional design and quality",
    img: product3,
    category: "Lamp",
    features: ["Modern Design", "Energy Efficient", "Adjustable"]
  },
  {
    id: 4,
    name: "Respira",
    price: "Rp 5.000.000",
    originalPrice: "Rp 6.200.000",
    description: "Breathable and comfortable outdoor furniture",
    img: product4,
    category: "Outdoor",
    features: ["Weather Resistant", "Comfortable", "Durable"]
  },
  {
    id: 5,
    name: "Grifo",
    price: "Rp 1.500.000",
    originalPrice: "Rp 2.000.000",
    description: "Modern lighting solution for your home",
    img: product5,
    category: "Lamp",
    features: ["LED Technology", "Adjustable", "Modern Design"]
  },
  {
    id: 6,
    name: "Muggo",
    price: "Rp 150.000",
    originalPrice: "Rp 200.000",
    description: "Minimalist side table for small spaces",
    img: product6,
    category: "Table",
    features: ["Compact", "Modern", "Sturdy"]
  },
  {
    id: 7,
    name: "Pingky",
    price: "Rp 7.000.000",
    originalPrice: "Rp 8.000.000",
    description: "Luxurious couch for your living room",
    img: product7,
    category: "Sofa",
    features: ["Premium Leather", "Comfortable", "Spacious"]
  },
  {
    id: 8,
    name: "Potty",
    price: "Rp 500.000",
    originalPrice: "Rp 650.000",
    description: "Beautiful plant pot for indoor decoration",
    img: product8,
    category: "Decor",
    features: ["Ceramic", "Handmade", "Eco-friendly"]
  },
];

function OurProducts() {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleViewDetails = (productId, event) => {
    event.stopPropagation(); // Prevent card click event
    navigate(`/product/${productId}`);
  };

  return (
    <Box sx={{ py: 10, px: { xs: 2, md: 10 }, textAlign: "center", backgroundColor: "#fff" }}>
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: 700,
          fontSize: 28,
          mb: 5,
        }}
      >
        Our Products
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card
              sx={{
                boxShadow: "none",
                borderRadius: 0,
                textAlign: "left",
                mx: "auto",
                transition: "transform 0.3s ease",
                "&:hover": { 
                  transform: "translateY(-5px)",
                  cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
                },
              }}
              onClick={() => handleProductClick(product.id)}
            >
              <CardMedia
                component="img"
                height="280"
                image={product.img}
                alt={product.name}
                sx={{
                  objectFit: "cover",
                  width: "100%"
                }}
              />
              <CardContent>
                <Typography 
                  sx={{ 
                    fontFamily: "Poppins", 
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    mb: 1
                  }}
                >
                  {product.name}
                </Typography>
                <Typography 
                  sx={{ 
                    fontFamily: "Poppins", 
                    color: "#B88E2F", 
                    fontWeight: 500,
                    fontSize: "1rem"
                  }}
                >
                  {product.price}
                </Typography>
                {product.originalPrice && (
                  <Typography 
                    sx={{ 
                      fontFamily: "Poppins", 
                      color: "#999",
                      textDecoration: "line-through",
                      fontSize: "0.9rem"
                    }}
                  >
                    {product.originalPrice}
                  </Typography>
                )}
              </CardContent>
              <CardActions sx={{ p: 2, pt: 0 }}>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    fontFamily: "Poppins",
                    borderColor: "#B88E2F",
                    color: "#B88E2F",
                    "&:hover": { 
                      backgroundColor: "#B88E2F", 
                      color: "#fff",
                      borderColor: "#B88E2F"
                    },
                  }}
                  onClick={(e) => handleViewDetails(product.id, e)}
                >
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Button
        variant="outlined"
        sx={{
          mt: 5,
          px: 4,
          py: 1.5,
          fontFamily: "Poppins",
          borderColor: "#B88E2F",
          color: "#B88E2F",
          "&:hover": { 
            backgroundColor: "#B88E2F", 
            color: "#fff",
            borderColor: "#B88E2F"
          },
        }}
      >
        Show More
      </Button>
    </Box>
  );
}

export default OurProducts;