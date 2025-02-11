import React, { useState } from 'react';
import { Autocomplete, TextField, Grid, Button } from '@mui/material';
import Sidebar from './Sidebar';

const Home = () => {
  const [category, setCategory] = useState('');
  const [segment, setSegment] = useState('');

  const categories = ['Electronics', 'Clothing', 'Home Appliances', 'Books'];
  const segments = ['Mens', 'Womens', 'Kids'];

  const handleSearch = () => {
    console.log('Category:', category, 'Segment:', segment);
  };

  return (
    <div className="glassmorphism" style={{ minHeight: '100vh' }}>
      <Grid container spacing={2} style={{ padding: '20px' }}>
        <Grid item xs={12}>
          <h2>Welcome to the Product Store</h2>
        </Grid>
        <Grid item xs={6}>
          <Autocomplete
            value={category}
            onChange={(event, newValue) => setCategory(newValue)}
            options={categories}
            renderInput={(params) => <TextField {...params} label="Category" />}
          />
        </Grid>
        <Grid item xs={6}>
          <Autocomplete
            value={segment}
            onChange={(event, newValue) => setSegment(newValue)}
            options={segments}
            renderInput={(params) => <TextField {...params} label="Segment" />}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleSearch}>Search</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
