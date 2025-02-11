import React from 'react';
import { TextField, Button, Grid } from '@mui/material';
import Sidebar from './Sidebar';

const Product = () => {
  return (
    <div className="glassmorphism" style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Grid container spacing={2} style={{ padding: '20px' }}>
        <Grid item xs={12}>
          <h2>Add Product</h2>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Product Name" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Category" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Price" type="number" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Description" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">Add Product</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Product;
