import React from 'react'
import CopyerightZettadaten from '../components/CopyerightZettadaten'
import { Slide, Popover, Grid, ClickAwayListener, Grow, Button, MenuList, ButtonGroup, Container, Toolbar, Typography, CssBaseline, Paper, Box, AppBar, Popper } from '@mui/material';
import MuiLink from '@mui/material/Link';
import Link from 'next/link';
import axios from "axios";
import ReactMarkdown from "react-markdown"


const tocs = ({ termsandservices, error }) => {
  //  return <pre>{JSON.stringify(termsandservices, null, 4)}</pre>;

  return (
    <React.Fragment>
      <title>toc</title>
      <layout>
        <CssBaseline />
        {termsandservices.data.map(termsandservices => (
          <Grid>
            <Typography variant="h6" sx={{ justifyContent: 'center', display: 'flex', fontSize: '3px', textAlign: 'middle', fontstyle: 'italic' }}>{termsandservices.attributes.title}</Typography>
            <Typography variant="body2" spacing={2} sx={{ justifyContent: 'center', display: 'flex', fontSize: '1.5em' }}>{termsandservices.attributes.termsandservice}</Typography>

          </Grid>
        ))} </layout>

      {/* <CopyerightZettadaten FooterLink={FooterLink} error={error} /> */}
    </React.Fragment >
  )
}

tocs.getInitialProps = async ctx => {
  try {

    const res = await axios.get('http://localhost:1337/api/' + 'termsandservices');
    const termsandservices = res.data;
    //        const res2 = await axios.get('http://localhost:1337/api/pages?populate=*')
    //    console.log(Pages);
    //        const images = res2.data;
    // const res3 = await axios.get('http://localhost:1337/api/' + 'footerLinks')
    // const FooterLink = res3.data;

    return { termsandservices };
    //  return { HomeAccordition };
  } catch (error) {
    throw (error);
  }

};


export default tocs
