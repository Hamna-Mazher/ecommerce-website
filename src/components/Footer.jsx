import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#fff', py: 6, borderTop: '1px solid #eee', mt: 6 }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>Furniro</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>Modern minimal furniture for every room.</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Quick Links</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 2 }}>
              <Button sx={{ textTransform: 'none', justifyContent: 'flex-start' }}>Shop</Button>
              <Button sx={{ textTransform: 'none', justifyContent: 'flex-start' }}>About</Button>
              <Button sx={{ textTransform: 'none', justifyContent: 'flex-start' }}>Contact</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Contact</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>support@furniro.com</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
