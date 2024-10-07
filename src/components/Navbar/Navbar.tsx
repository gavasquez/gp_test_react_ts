"use client";
import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import CustomDialog from '../CustomDialogo/CustomDialogo';
import { FavoriteTable } from './FavoriteTable';

export type NavbarProps = {
  // types...
};

const Navbar: React.FC<NavbarProps> = ( { } ) => (
  <>
  <CustomDialog>
    <FavoriteTable />
  </CustomDialog>
   <AppBar position="fixed">
    <Toolbar>
      <Typography variant="h6" component="div" sx={ { flexGrow: 1 } }>
        Gentleman Programming React TEST
      </Typography>
    </Toolbar>
  </AppBar>
  </>
 
);

export default Navbar;
