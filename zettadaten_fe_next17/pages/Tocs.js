import React from 'react'
import CopyerightZettadaten from '../components/CopyerightZettadaten'
import { Slide, Popover, Grid, ClickAwayListener, Grow, Button, MenuList, ButtonGroup, Container, Toolbar, Typography, CssBaseline, Paper, Box, AppBar, Popper } from '@mui/material';
import MuiLink from '@mui/material/Link';
import Link from 'next/link';
import axios from "axios";



const tocs = ({ termsandservices }) => {
  return <pre>{JSON.stringify(termsandservices, null, 4)}</pre>;

  return (
    <React.Fragment>
      <head> <title>toc</title></head>
      <layout>
        <Grid>
          <Typography>
            {termsandservices.attributes.termsandservice}
          </Typography>

        </Grid>
      </layout>
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
  {/*
    let Pages =
      "'http://localhost:1337/api/' + 'pages'";
   // let homeAaccorditions =
   //   "'http://localhost:1337/api/' + 'home-accorditions'";
   // let Menus =
    //  "'http://localhost:1337/api/' + 'menus'";

   // let HeroSections =
   //   "'http://localhost:1337/api/' + 'hero-sections'";
    let myimages = "'http://localhost:1337/api/pages?populate=*'";
    const requestPages = axios.get(Pages);
   // const requesthomeAaccorditions = axios.get(homeAaccorditions);
  //  const requestMenus = axios.get(Menus);
  //  const requestHeroSections = axios.get(HeroSections);
    const requestMyImages = axios.get(myimages);
    axios
      .all([requestPages, requestMyImages ]) // requesthomeAaccorditions, requestMenus, requestHeroSections])
      .then(
        axios.spread((...responses) => {
  //        const requestPages = responses[0];
          //  const requesthomeAaccorditions = responses[1];
          //  const requestMenus = responses[2];
          //  const requestHeroSections = responses[3];
          const requestMyImages = responses[2];

          // use/access the results
      
          // console.log(requestPages, requesthomeAaccorditions, requestMenus, requestHeroSections);
          return {
            
             // requestPages,
              requestMyImages,
            
          }; //requesthomeAaccorditions, requestMenus, requestHeroSections };
        })
     
      ) 
  } catch (error) {
    return { error };
  }
*/}
};


export default tocs
