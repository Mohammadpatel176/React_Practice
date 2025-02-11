import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => {
    setOpen(open);
  };

  return (
    <div>
      <IconButton onClick={() => toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={open} onClose={() => toggleDrawer(false)}>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/product">
            <ListItemText primary="Add Product" />
          </ListItem>
          <ListItem button component={Link} to="/product-list">
            <ListItemText primary="Product List" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
