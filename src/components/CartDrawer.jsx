import React from 'react';
import { Drawer, Box, Typography, Button } from '@mui/material';

const CartDrawer = ({ open, onClose, items = [] }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 360, p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>Shopping Cart</Typography>
        {items.length === 0 ? (
          <Typography variant="body2" color="text.secondary">Your cart is empty.</Typography>
        ) : (
          items.map(i => (
            <Box key={i.id} sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
              <Box sx={{ width: 64, height: 64, bgcolor: '#f5f5f5', borderRadius: 1 }} />
              <Box>
                <Typography variant="subtitle1">{i.name}</Typography>
                <Typography variant="body2" color="text.secondary">Rs. {i.price}</Typography>
              </Box>
            </Box>
          ))
        )}
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Checkout</Button>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
