import * as React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
//import Grid from '@mui/material/Grid'; // Grid version 1
import Grid from '@mui/material/Unstable_Grid2'; 
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
//import Image from '@mui/material/Image';
import { Container, Toolbar, Typography, CssBaseline } from '@mui/material';
import MuiLink from '@mui/material/Link';
//import useScrollTrigger from '@mui/material/useScrollTrigger';
import { AppBar } from '@mui/material';
import { grey, brown } from '@mui/material/colors';
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will defau

const Navigations = () => {
  //const brown = brown[900];
  return (
    <React.Fragment>
      <CssBaseline />
      
      <AppBar position="sticky" bgcolor="brown[A900]" sx={{ top: 'auto', bottom: 2 }}>
              <Toolbar>
          <Typography variant="h6" gutterBottom component="div" sx={{ p: 2, pb: 0, top: 'auto', bottom: 2 }}>
            <MuiLink color="inherit" href="/">
              Home
            </MuiLink>{' '}
            <MuiLink color="inherit"  href="/">
              Contact us
            </MuiLink>{' '}
            <MuiLink color="inherit" href="/">
              About us
            </MuiLink>{' '}

          </Typography>
        </Toolbar>
      </AppBar>
        <Container>

        </Container>
        
    </React.Fragment>
  );
}

export default Navigations

