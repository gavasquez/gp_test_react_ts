"use client";
import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

export type NavbarProps = {
  // types...
};

const Navbar: React.FC<NavbarProps> = ( { } ) => (
  <AppBar position="fixed">
    <Toolbar>
      <Typography variant="h6" component="div" sx={ { flexGrow: 1 } }>
        Gentleman Programming React TEST
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Navbar;
