import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Container, Button, Typography, Paper, Popover, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
//import Grid from '@mui/material/Grid'; // Grid version 1
//import Grid from '@mui/material/Unstable_Grid2';
import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { CardMedia, Card, CardContent } from '@mui/material';
//import Image from 'next/image';
//import Paper from '@mui/material/Paper';
//import Img from '';
//import { Container } from '@mui/material';


const BrokenComponantTabbes = () => {
  return (
    <React.Fragment>
          <Grid container spacing={2}>
              <Grid item xs={6}>
                  <item><Container sx={{ height: '100%', width: '100%' }} maxWidth="sm">
                      <CardMedia component="img" width='100%' sx={{ ml: '20em' }} image="/profile.png" alt="Paella dish" />


                  </Container>
                  </item> </Grid>
              <Grid item xs sx={{display: 'flex' } }>
                  <item>
                      <Container sx={{ backgroundColor: '#fff', height: 'fit-content', width: 'fit-content', mt: '10rem', mb: '5rem', px: '5rem', opacity: '0.7' }} maxheight="sm" maxWidth="sm">
                          <CardContent sx={{
                              justifyContent: 'flex-end', lineHeight: '24px',
                              fontSize: '16px',
                              letterSpacing: '0.18px',
                              color: '#172B4D',
                              margin: '16px 0px' }}> 
                              <Typography variant="h6"> <Typography sx={{ textDecoration: 'underline', lineHeight: '24px' }} display="inline">
                                  Some</Typography>  Title </Typography>
                              <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis nunc sed blandit libero volutpat. Ipsum dolor sit amet consectetur. Morbi tristique senectus et netus et malesuada. Mi bibendum neque egestas congue quisque egestas diam in. Eget egestas purus viverra accumsan in nisl nisi. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Ut aliquam purus sit amet. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Imperdiet sed euismod nisi porta lorem mollis. Tincidunt nunc pulvinar sapien et ligula. Quam vulputate dignissim suspendisse in est ante in nibh mauris. Ornare massa eget egestas purus viverra accumsan in. Neque convallis a cras semper auctor neque. Elementum nisi quis eleifend quam adipiscing. Fringilla phasellus faucibus scelerisque eleifend donec.

                              Elit duis

                              <Button variant="contained" css={css` 
  display: flex;
  align-items: center;
  justify-content: center;                          
  background-color: black;
  color: white;
  font-size: 10px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  margin-left: 10px;
  :hover {
            color: #fff;
            background-color: #3e3837;
            border:2px solid #3e2723;
            border-color: #3e2723;
            transition: border-color 0s ease-out 0.6s, width 0.3s ease-out 0.6s, height 0.3s ease-out .7s;
          }
`} >  Click for More </Button>
                          </Typography>
                          </CardContent>
                      </Container>
                  </item>
              </Grid>


          </Grid>

    </React.Fragment>
  )
}

export default BrokenComponantTabbes
