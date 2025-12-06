import React from 'react';
import { Container, Typography, Grid, Card, Box } from '@mui/material';

const CategoryGrid = () => {
  const categories = [
    { id: 1, name: 'Dining' },
    { id: 2, name: 'Living' },
    { id: 3, name: 'Bedroom' },
    { id: 4, name: 'Office' },
  ];

  return (
    <Container sx={{ mb: 6 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>Browse The Range</Typography>
      <Grid container spacing={2}>
        {categories.map(cat => (
          <Grid item xs={6} md={3} key={cat.id}>
            <Card sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ width: 80, height: 80, bgcolor: '#fff', boxShadow: 1, borderRadius: 1 }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{cat.name}</Typography>
                <Typography variant="body2" color="text.secondary">24 items</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CategoryGrid;
