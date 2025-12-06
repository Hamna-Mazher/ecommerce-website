// src/components/CartSidebar.js
import React, { useState } from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Badge,
  TextField,
  Stack
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

const CartSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Syltherine',
      price: 2500000,
      quantity: 1,
      image: '/api/placeholder/80/80',
      category: 'Chair'
    },
    {
      id: 2,
      name: 'Leviosa',
      price: 2500000,
      quantity: 2,
      image: '/api/placeholder/80/80',
      category: 'Sofa'
    },
    {
      id: 3,
      name: 'Muggo',
      price: 150000,
      quantity: 1,
      image: '/api/placeholder/80/80',
      category: 'Table'
    }
  ]);
  
  const navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  const updateQuantity = (id, delta) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = 100000; // Fixed shipping cost
    const tax = subtotal * 0.1; // 10% tax
    return subtotal + shipping + tax;
  };

  const handleCheckout = () => {
    setIsOpen(false);
    navigate('/checkout');
  };

  const handleViewCart = () => {
    setIsOpen(false);
    navigate('/cart');
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <>
      {/* Cart Icon with Badge */}
      <IconButton 
        onClick={toggleDrawer(true)}
        sx={{ 
          position: 'relative',
          color: '#333'
        }}
      >
        <Badge 
          badgeContent={totalItems} 
          color="error"
          sx={{
            '& .MuiBadge-badge': {
              backgroundColor: '#B88E2F',
              color: 'white'
            }
          }}
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>

      {/* Cart Sidebar Drawer */}
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: { xs: '100%', sm: 400 },
            maxWidth: '100%',
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Header */}
          <Box sx={{ p: 3, borderBottom: 1, borderColor: 'divider' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h5" sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
                Shopping Cart ({totalItems})
              </Typography>
              <IconButton onClick={toggleDrawer(false)}>
                <CloseIcon />
              </IconButton>
            </Box>
            
            {cartItems.length === 0 && (
              <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ py: 4 }}>
                Your cart is empty
              </Typography>
            )}
          </Box>

          {/* Cart Items List */}
          {cartItems.length > 0 && (
            <List sx={{ flex: 1, overflow: 'auto', p: 2 }}>
              {cartItems.map((item) => (
                <React.Fragment key={item.id}>
                  <ListItem
                    sx={{
                      py: 2,
                      px: 1,
                      '&:hover': {
                        backgroundColor: 'action.hover'
                      }
                    }}
                    secondaryAction={
                      <IconButton 
                        edge="end" 
                        aria-label="delete"
                        onClick={() => removeItem(item.id)}
                        sx={{ color: '#ff4444' }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar 
                        variant="rounded"
                        sx={{ 
                          width: 80, 
                          height: 80,
                          borderRadius: 1,
                          backgroundColor: 'grey.100'
                        }}
                      >
                        <img 
                          src={item.image} 
                          alt={item.name}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography 
                          variant="subtitle1" 
                          sx={{ 
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                            fontSize: '0.95rem'
                          }}
                        >
                          {item.name}
                        </Typography>
                      }
                      secondary={
                        <Box>
                          <Typography 
                            variant="body2" 
                            color="#B88E2F"
                            sx={{ 
                              fontFamily: 'Poppins',
                              fontWeight: 600,
                              mb: 1
                            }}
                          >
                            {formatPrice(item.price)}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <IconButton 
                              size="small"
                              onClick={() => updateQuantity(item.id, -1)}
                              sx={{ 
                                border: 1, 
                                borderColor: 'grey.300',
                                borderRadius: 1,
                                p: 0.5
                              }}
                            >
                              <RemoveIcon fontSize="small" />
                            </IconButton>
                            <Typography 
                              variant="body2" 
                              sx={{ 
                                minWidth: 30, 
                                textAlign: 'center',
                                fontFamily: 'Poppins'
                              }}
                            >
                              {item.quantity}
                            </Typography>
                            <IconButton 
                              size="small"
                              onClick={() => updateQuantity(item.id, 1)}
                              sx={{ 
                                border: 1, 
                                borderColor: 'grey.300',
                                borderRadius: 1,
                                p: 0.5
                              }}
                            >
                              <AddIcon fontSize="small" />
                            </IconButton>
                          </Box>
                        </Box>
                      }
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          )}

          {/* Cart Summary */}
          {cartItems.length > 0 && (
            <Box sx={{ p: 3, borderTop: 1, borderColor: 'divider', backgroundColor: 'grey.50' }}>
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
                    Subtotal:
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
                    {formatPrice(calculateSubtotal())}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
                    Shipping:
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
                    {formatPrice(100000)}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
                    Tax:
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
                    {formatPrice(calculateSubtotal() * 0.1)}
                  </Typography>
                </Box>
                <Divider sx={{ my: 1 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="h6" sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
                    Total:
                  </Typography>
                  <Typography variant="h6" sx={{ fontFamily: 'Poppins', fontWeight: 600, color: '#B88E2F' }}>
                    {formatPrice(calculateTotal())}
                  </Typography>
                </Box>
              </Box>

              {/* Action Buttons */}
              <Stack spacing={2}>
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  onClick={handleCheckout}
                  sx={{
                    backgroundColor: '#B88E2F',
                    '&:hover': {
                      backgroundColor: '#A57C2A'
                    },
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    py: 1.5
                  }}
                >
                  Checkout Now
                </Button>
                <Button
                  variant="outlined"
                  fullWidth
                  size="large"
                  onClick={handleViewCart}
                  sx={{
                    borderColor: '#B88E2F',
                    color: '#B88E2F',
                    '&:hover': {
                      borderColor: '#A57C2A',
                      backgroundColor: 'rgba(184, 142, 47, 0.1)'
                    },
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    py: 1.5
                  }}
                >
                  View Cart
                </Button>
                <Button
                  variant="text"
                  fullWidth
                  onClick={toggleDrawer(false)}
                  sx={{
                    fontFamily: 'Poppins',
                    color: 'text.secondary'
                  }}
                >
                  Continue Shopping
                </Button>
              </Stack>
            </Box>
          )}

          {/* Empty Cart State */}
          {cartItems.length === 0 && (
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 3 }}>
              <ShoppingCartIcon sx={{ fontSize: 80, color: 'grey.300', mb: 2 }} />
              <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Poppins' }}>
                Your cart is empty
              </Typography>
              <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 3, fontFamily: 'Poppins' }}>
                Add some products to your cart and they will appear here.
              </Typography>
              <Button
                variant="contained"
                onClick={toggleDrawer(false)}
                sx={{
                  backgroundColor: '#B88E2F',
                  '&:hover': {
                    backgroundColor: '#A57C2A'
                  },
                  fontFamily: 'Poppins',
                  fontWeight: 600
                }}
              >
                Start Shopping
              </Button>
            </Box>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default CartSidebar;