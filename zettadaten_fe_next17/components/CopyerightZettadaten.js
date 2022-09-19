//import Link from 'next/link'
import React from 'react'
import Copyright from '../src/Copyright';
import { Container, Typography, Paper, Box, Card, Stack, Divider } from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import MuiLink from '@mui/material/Link';

const CopyerightZettadaten = () => {
  return (

    <React.Fragment>
      {/*<Stack spacing={1} sx={{ bgcolor: '#3a3832', color: '#fff' }} divider={<Divider orientation="vertical" flexItem />}> */}
        <Box variant="outlined" square={true} divider={<Divider orientation="vertical" flexItem />} sx={{ p: 10, flexGrow: 1, width: '100%', bgcolor: '#3a3832', color: '#fff', border: 1,borderRadius: 1 }}>
      <Grid2 container spacing={3}>
          <Grid2 xs={6}>
            <item>xs=6 get items from loop</item>
        </Grid2>
        <Grid2 xs>
            <item>xs=Auto get items from loop</item>
          </Grid2>
          <Grid2 xs>
            <item>xs=Autoget items from loop</item>
          </Grid2>
          <Grid2 xs>
            <item>xs=Auto get items from loop</item>
          </Grid2>
          </Grid2>
        </Box>
        
      <Paper>
      <Copyright />
      </Paper>
{/*      </Stack> */}
    </ React.Fragment>


  )
}

export default CopyerightZettadaten;
