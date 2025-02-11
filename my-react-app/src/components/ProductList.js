import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import Sidebar from './Sidebar';

const ProductList = () => {
  const products = [
    { name: 'Product 1', category: 'Electronics', price: '$50' },
    { name: 'Product 2', category: 'Clothing', price: '$30' },
    // Add more products here
  ];

  return (
    <div className="glassmorphism" style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Grid container spacing={2} style={{ padding: '20px' }}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2">{product.category}</Typography>
                <Typography variant="h6">{product.price}</Typography>
                <Button variant="contained" color="primary">Add to Cart</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
