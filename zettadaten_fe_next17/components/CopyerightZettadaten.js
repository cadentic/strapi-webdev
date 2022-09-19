//import Link from 'next/link'
import React from 'react'
import Copyright from '../src/Copyright';
import { Container, Typography, Paper,Box,Item , Card} from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import MuiLink from '@mui/material/Link';

const CopyerightZettadaten = () => {
  return (

    <React.Fragment>
      <Box variant="outlined" square={true} sx={{ p: 10, flexGrow: 1, width: '100%', bgcolor: '#3a3832', color: '#fff', border: 1,borderRadius: 1 }}>
      <Grid2 container spacing={3}>
          <Grid2 xs={6}>
            <item>xs=6</item>
        </Grid2>
        <Grid2 xs>
          <item>xs=Auto</item>
          </Grid2>
          <Grid2 xs>
            <item>xs=Auto</item>
          </Grid2>
          <Grid2 xs>
            <item>xs=Auto</item>
          </Grid2>
          </Grid2>
        </Box>
        
      <Paper>
      <Copyright />
      </Paper>

    </ React.Fragment>


  )
}

export default CopyerightZettadaten;
