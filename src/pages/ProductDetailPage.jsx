// src/pages/ProductDetailPage.js
import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip,
  Rating,
  Divider,
  IconButton,
  Breadcrumbs,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Stack
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Import your product images
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import Footer from "../components/Footer";
// Product data matching your OurProducts component
const allProducts = [
  {
    id: 1,
    name: "Syltherine",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    description: "Stylish and comfortable furniture for modern living spaces. Designed with premium materials and ergonomic features for ultimate comfort.",
    img: product1,
    category: "Chair",
    features: ["Premium Material", "Ergonomic Design", "Easy Maintenance", "Modern Style"],
    rating: 4.5,
    reviewCount: 24,
    inStock: true,
    specifications: [
      { name: 'Material', value: 'Premium Fabric' },
      { name: 'Dimensions', value: '80cm x 80cm x 100cm' },
      { name: 'Weight', value: '15 kg' },
      { name: 'Color', value: 'Gray' },
      { name: 'Style', value: 'Modern' }
    ]
  },
  {
    id: 2,
    name: "Leviosa",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.000.000",
    description: "Elegant furniture piece with superior craftsmanship. Perfect for your living room with its luxurious fabric and solid wood frame.",
    img: product2,
    category: "Sofa",
    features: ["Luxury Fabric", "Solid Wood Frame", "Comfort Focused", "Durable"],
    rating: 4.3,
    reviewCount: 18,
    inStock: true,
    specifications: [
      { name: 'Material', value: 'Luxury Fabric' },
      { name: 'Dimensions', value: '200cm x 90cm x 85cm' },
      { name: 'Weight', value: '45 kg' },
      { name: 'Color', value: 'Beige' },
      { name: 'Style', value: 'Contemporary' }
    ]
  },
  {
    id: 3,
    name: "Lolito",
    price: "Rp 7.000.000",
    originalPrice: "Rp 8.500.000",
    description: "Luxury furniture with exceptional design and quality. This piece combines modern aesthetics with functional design.",
    img: product3,
    category: "Lamp",
    features: ["Modern Design", "Energy Efficient", "Adjustable", "LED Technology"],
    rating: 4.7,
    reviewCount: 32,
    inStock: true,
    specifications: [
      { name: 'Material', value: 'Metal & Glass' },
      { name: 'Dimensions', value: '40cm x 40cm x 180cm' },
      { name: 'Weight', value: '8 kg' },
      { name: 'Color', value: 'Black' },
      { name: 'Style', value: 'Industrial' }
    ]
  },
  {
    id: 4,
    name: "Respira",
    price: "Rp 5.000.000",
    originalPrice: "Rp 6.200.000",
    description: "Breathable and comfortable outdoor furniture. Designed to withstand weather conditions while providing maximum comfort.",
    img: product4,
    category: "Outdoor",
    features: ["Weather Resistant", "Comfortable", "Durable", "Easy to Clean"],
    rating: 4.4,
    reviewCount: 21,
    inStock: true,
    specifications: [
      { name: 'Material', value: 'Weather-resistant Fabric' },
      { name: 'Dimensions', value: '180cm x 80cm x 75cm' },
      { name: 'Weight', value: '25 kg' },
      { name: 'Color', value: 'Brown' },
      { name: 'Style', value: 'Outdoor' }
    ]
  },
  {
    id: 5,
    name: "Grifo",
    price: "Rp 1.500.000",
    originalPrice: "Rp 2.000.000",
    description: "Modern lighting solution for your home. Features adjustable arms and energy-efficient LED technology.",
    img: product5,
    category: "Lamp",
    features: ["LED Technology", "Adjustable", "Modern Design", "Energy Saving"],
    rating: 4.2,
    reviewCount: 15,
    inStock: true,
    specifications: [
      { name: 'Material', value: 'Aluminum' },
      { name: 'Dimensions', value: '30cm x 30cm x 50cm' },
      { name: 'Weight', value: '3 kg' },
      { name: 'Color', value: 'Silver' },
      { name: 'Style', value: 'Modern' }
    ]
  },
  {
    id: 6,
    name: "Muggo",
    price: "Rp 150.000",
    originalPrice: "Rp 200.000",
    description: "Minimalist side table for small spaces. Perfect for holding drinks, books, or decorative items.",
    img: product6,
    category: "Table",
    features: ["Compact", "Modern", "Sturdy", "Lightweight"],
    rating: 4.0,
    reviewCount: 28,
    inStock: true,
    specifications: [
      { name: 'Material', value: 'MDF Wood' },
      { name: 'Dimensions', value: '40cm x 40cm x 50cm' },
      { name: 'Weight', value: '5 kg' },
      { name: 'Color', value: 'White' },
      { name: 'Style', value: 'Minimalist' }
    ]
  },
  {
    id: 7,
    name: "Pingky",
    price: "Rp 7.000.000",
    originalPrice: "Rp 8.000.000",
    description: "Luxurious couch for your living room. Made with premium leather and designed for ultimate comfort.",
    img: product7,
    category: "Sofa",
    features: ["Premium Leather", "Comfortable", "Spacious", "Elegant"],
    rating: 4.6,
    reviewCount: 19,
    inStock: true,
    specifications: [
      { name: 'Material', value: 'Premium Leather' },
      { name: 'Dimensions', value: '220cm x 95cm x 80cm' },
      { name: 'Weight', value: '60 kg' },
      { name: 'Color', value: 'Brown' },
      { name: 'Style', value: 'Luxury' }
    ]
  },
  {
    id: 8,
    name: "Potty",
    price: "Rp 500.000",
    originalPrice: "Rp 650.000",
    description: "Beautiful plant pot for indoor decoration. Handmade ceramic with unique patterns and designs.",
    img: product8,
    category: "Decor",
    features: ["Ceramic", "Handmade", "Eco-friendly", "Unique Design"],
    rating: 4.8,
    reviewCount: 26,
    inStock: true,
    specifications: [
      { name: 'Material', value: 'Ceramic' },
      { name: 'Dimensions', value: '25cm x 25cm x 30cm' },
      { name: 'Weight', value: '2 kg' },
      { name: 'Color', value: 'Terracotta' },
      { name: 'Style', value: 'Bohemian' }
    ]
  },
];

const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [tabValue, setTabValue] = useState(0);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product by ID
    const foundProduct = allProducts.find(p => p.id === parseInt(productId));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      // Fallback if product not found
      setProduct({
        id: parseInt(productId),
        name: `Product ${productId}`,
        price: "Rp 2.500.000",
        originalPrice: "Rp 3.500.000",
        description: "This is a detailed description of the product.",
        img: product1,
        category: 'Furniture',
        features: ['Premium Material', 'Ergonomic Design', 'Easy Maintenance'],
        rating: 4.0,
        reviewCount: 0,
        inStock: true,
        specifications: [
          { name: 'Material', value: 'Premium Material' },
          { name: 'Dimensions', value: 'Standard Size' },
          { name: 'Weight', value: 'Standard Weight' },
          { name: 'Color', value: 'Standard Color' },
          { name: 'Style', value: 'Modern' }
        ]
      });
    }
  }, [productId]);

  const handleQuantityChange = (delta) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log(`Added ${quantity} of ${product?.name} to cart`);
    // You can add your cart logic here
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Get related products (excluding current product)
  const relatedProducts = allProducts
    .filter(p => p.id !== parseInt(productId))
    .slice(0, 4);

  if (!product) {
    return (
      <Container maxWidth="lg" sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="h4">Loading...</Typography>
      </Container>
    );
  }

  return (
    <>
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs sx={{ mb: 3 }}>
        <Link 
          color="inherit" 
          href="/" 
          onClick={(e) => { e.preventDefault(); navigate('/'); }}
          sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
        >
          Home
        </Link>
        <Link 
          color="inherit" 
          href="/products" 
          onClick={(e) => { e.preventDefault(); navigate('/products'); }}
          sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
        >
          Products
        </Link>
        <Typography color="text.primary">{product.name}</Typography>
      </Breadcrumbs>

      <Grid container spacing={6}>
        {/* Product Images */}
        <Grid item xs={12} md={6}>
          <Card sx={{ mb: 2 }}>
            <CardMedia
              component="img"
              height="500"
              image={product.img}
              alt={product.name}
              sx={{ objectFit: 'cover' }}
            />
          </Card>
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
            {/* Since we have single images, we'll use the same image for thumbnails */}
            {[1, 2, 3, 4].map((index) => (
              <Card
                key={index}
                sx={{ 
                  cursor: 'pointer', 
                  border: selectedImage === index ? 2 : 0,
                  borderColor: '#B88E2F',
                  width: 80,
                  height: 80
                }}
                onClick={() => setSelectedImage(index)}
              >
                <CardMedia
                  component="img"
                  height="80"
                  image={product.img}
                  alt={`${product.name} ${index + 1}`}
                  sx={{ objectFit: 'cover' }}
                />
              </Card>
            ))}
          </Box>
        </Grid>

        {/* Product Info */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 600, fontSize: '2.5rem', color: '#333' }}>
            {product.name}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Rating value={product.rating} precision={0.1} readOnly />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              ({product.reviewCount} reviews)
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 1, color: '#B88E2F' }}>
              {product.price}
            </Typography>
            {product.originalPrice && (
              <Typography 
                variant="h6" 
                color="text.secondary" 
                sx={{ textDecoration: 'line-through' }}
              >
                {product.originalPrice}
              </Typography>
            )}
          </Box>

          <Chip 
            label={product.inStock ? 'In Stock' : 'Out of Stock'} 
            color={product.inStock ? 'success' : 'error'}
            sx={{ mb: 3, backgroundColor: product.inStock ? '#4CAF50' : '#F44336' }}
          />

          <Typography variant="body1" paragraph color="text.secondary" sx={{ fontStyle: 'italic' }}>
            {product.category} Collection
          </Typography>

          {/* Features List */}
          <List sx={{ mb: 3 }}>
            {product.features.map((feature, index) => (
              <ListItem key={index} sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon sx={{ color: '#B88E2F' }} fontSize="small" />
                </ListItemIcon>
                <ListItemText 
                  primary={feature} 
                  sx={{ 
                    '& .MuiTypography-root': { 
                      fontFamily: 'Poppins',
                      fontSize: '0.9rem'
                    }
                  }}
                />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 3 }} />

          {/* Quantity Selector */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <Typography variant="h6" sx={{ mr: 3, minWidth: 100, fontFamily: 'Poppins' }}>
              Quantity:
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', border: 1, borderColor: 'grey.300', borderRadius: 1 }}>
              <IconButton 
                onClick={() => handleQuantityChange(-1)}
                sx={{ borderRadius: 0, color: '#B88E2F' }}
              >
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ mx: 3, minWidth: 20, textAlign: 'center', fontFamily: 'Poppins' }}>
                {quantity}
              </Typography>
              <IconButton 
                onClick={() => handleQuantityChange(1)}
                sx={{ borderRadius: 0, color: '#B88E2F' }}
              >
                <AddIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Action Buttons */}
          <Stack direction="row" spacing={2} sx={{ mb: 4 }} flexWrap="wrap">
            <Button 
              variant="contained" 
              size="large"
              disabled={!product.inStock}
              onClick={handleAddToCart}
              sx={{ 
                py: 1.5, 
                px: 4,
                fontSize: '1.1rem',
                backgroundColor: '#B88E2F',
                '&:hover': {
                  backgroundColor: '#A57C2A'
                }
              }}
            >
              Add to Cart
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              sx={{ 
                py: 1.5, 
                px: 4,
                borderColor: '#B88E2F',
                color: '#B88E2F',
                '&:hover': {
                  borderColor: '#A57C2A',
                  backgroundColor: 'rgba(184, 142, 47, 0.1)'
                }
              }}
            >
              Buy Now
            </Button>
            <IconButton sx={{ border: 1, borderColor: 'grey.300', color: '#B88E2F' }}>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton sx={{ border: 1, borderColor: 'grey.300', color: '#B88E2F' }}>
              <ShareIcon />
            </IconButton>
          </Stack>

          {/* Additional Info */}
          <Box sx={{ backgroundColor: 'grey.50', p: 3, borderRadius: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Poppins' }}>
              Product Highlights
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Poppins' }}>
              {product.description.split('.')[0]}.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Product Details Tabs */}
      <Box sx={{ mt: 8 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          sx={{ 
            borderBottom: 1, 
            borderColor: 'divider',
            '& .MuiTab-root': {
              fontFamily: 'Poppins',
              fontWeight: 500
            }
          }}
        >
          <Tab label="Description" />
          <Tab label="Specifications" />
          <Tab label="Reviews" />
        </Tabs>

        <Box sx={{ py: 4 }}>
          {tabValue === 0 && (
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, fontFamily: 'Poppins' }}>
              {product.description}
            </Typography>
          )}

          {tabValue === 1 && (
            <TableContainer component={Paper} elevation={0} sx={{ border: 1, borderColor: 'grey.200' }}>
              <Table>
                <TableBody>
                  {product.specifications.map((spec, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{ 
                        fontWeight: 600, 
                        backgroundColor: 'grey.50', 
                        width: '30%',
                        fontFamily: 'Poppins'
                      }}>
                        {spec.name}
                      </TableCell>
                      <TableCell sx={{ fontFamily: 'Poppins' }}>
                        {spec.value}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          {tabValue === 2 && (
            <Box>
              <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Poppins' }}>
                Customer Reviews ({product.reviewCount})
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Poppins' }}>
                Customer reviews will be displayed here. This section shows feedback from verified purchasers.
              </Typography>
            </Box>
          )}
        </Box>
      </Box>

{/* Related Products */}
<Box sx={{ mt: 8 }}>
  <Typography 
    variant="h4" 
    gutterBottom 
    sx={{ 
      textAlign: 'center', 
      mb: 6, 
      fontFamily: 'Poppins',
      fontWeight: 600
    }}
  >
    Related Products
  </Typography>

  <Grid container spacing={2} justifyContent="center">
    {relatedProducts.map((relatedProduct) => (
      <Grid 
        item 
        xs={6}   // 2 per row on mobile
        sm={3}   // 4 per row on tablet & desktop
        key={relatedProduct.id}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Card
          sx={{
            cursor: 'pointer',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            boxShadow: 'none',
            border: '1px solid #e0e0e0',
            width: '100%',   // full width of Grid item
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
            }
          }}
          onClick={() => navigate(`/product/${relatedProduct.id}`)}
        >
          <CardMedia
            component="img"
            height="240"
            image={relatedProduct.img}
            alt={relatedProduct.name}
            sx={{ objectFit: 'cover', width: '100%', borderRadius: '4px' }}
          />
          <Box sx={{ textAlign: 'center', p: 1 }}>
            <Typography 
              variant="h6"
              sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '1.1rem', mb: 0.5 }}
            >
              {relatedProduct.name}
            </Typography>
            <Typography 
              variant="h6"
              sx={{ color: '#B88E2F', fontFamily: 'Poppins', fontWeight: 600, fontSize: '1rem' }}
            >
              {relatedProduct.price}
            </Typography>
          </Box>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>

    </Container>
    <Footer />
          </>
  );
};

export default ProductDetailPage;