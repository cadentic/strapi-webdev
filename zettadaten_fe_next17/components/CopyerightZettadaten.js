//import Link from 'next/link'
import React from 'react'
import Copyright from '../src/Copyright';
import { MuiLink, Container, Typography, Paper, Box, Card, Stack, Divider } from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';


const CopyerightZettadaten = ({ FooterLink , error}) => {
  return (

    <React.Fragment>
      {/*<Stack spacing={1} sx={{ bgcolor: '#3a3832', color: '#fff' }} divider={<Divider orientation="vertical" flexItem />}> */}
      <Box variant="outlined" square={true} divider={<Divider orientation="vertical" flexItem sx={{color: '#faf8f7'}} />} sx={{ p: 10, flexGrow: 1, width: '100%', bgcolor: '#3a3832', color: '#fff', border: 1,borderRadius: 1 }}>
        {FooterLink.data.map(FooterLink => (
          <Grid2 key={`$FooterLink.id`} container spacing={3}>
          
            <Grid2 key={`$FooterLink.id`} xs={6}>
            <item> Resources for </item>
            <item> <MuiLink color="inherit" href={FooterLink.attributes.pagelink}> {FooterLink.attributes.pagename}</MuiLink></item>
        </Grid2>
          <Grid2 xs>
              
            <item> Why CADENTIC and CADENTIC ZETTAGIGA? </item>
            <item><MuiLink color="inherit" href={FooterLink.attributes.pagelink}> {FooterLink.attributes.pagename}</MuiLink></item>
          </Grid2>
          <Grid2 xs>
            <item> Looking For Something More ... </item>
            <item><MuiLink color="inherit" href={FooterLink.attributes.pagelink}> {FooterLink.attributes.pagename}</MuiLink></item>
          </Grid2>
          <Grid2 xs>
            <item> Try Something From Here ... </item>
            <item><MuiLink color="inherit" href={FooterLink.attributes.pagelink}> {FooterLink.attributes.pagename}</MuiLink></item>
          </Grid2>
          
          </Grid2>
        ))};
        </Box>
        
      <Paper>
      <Copyright />
      </Paper>
{/*      </Stack> */}
    </ React.Fragment>


  )
}

export default CopyerightZettadaten;
