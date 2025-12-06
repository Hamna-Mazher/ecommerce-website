import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCart } from "../context/CartContext";


const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <Card sx={{ borderRadius: 2, boxShadow: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardMedia component="img" height="200" image={product.image} alt={product.name} />
      </Link>

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{product.name}</Typography>
        <Typography variant="body2" color="text.secondary">{product.description}</Typography>
        <Box sx={{ mt: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Rs. {product.price}</Typography>
          <Button
  onClick={() => addToCart(p)}
  sx={{
    background: "#B88E2F",
    color: "#FFF",
    width: "100%",
    mt: 1,
    textTransform: "none",
  }}
>
  Add to Cart
</Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
