import axios from "axios";
import Head from "next/head";
import * as React from "react";
//import * as Material from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
//import Container from "@mui/material";
import style from "../styles/Home.module.css";
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { css } from '@emotion/react';
import Navigations from '../components/Navigation.js';
import CopyerightZettadaten from '../components/CopyerightZettadaten.js';
import { useState, useEffect } from "react";
import Image from 'next/image';
import HeroSection from "../components/HeroSection";
import TabbedSection from "../components/TabbedSection";
import DropDownPaperSection from "../components/DropDownPaperSection";
import Testimonial from "../components/Testimonial";
import Link from "next/link";

//import { style } from "@mui/system";

//function notificationsLabel(count) {
//if (count === 0) {
//return 'no notifications';
//}
//if (count > 99) {
//return 'more than 99 notifications';
//}
//return `${count} notifications`;
//}


/*
export default function Home({ pages }) {
  return (
    <div className={styles.container}>

      // <Head>
      //  <title>Create Next App</title>
      //  <link rel="icon" href="/favicon.ico" />
     // </Head>

      {pages &&
        pages.map(pages => (


          <Container key={pages.id}>
            <h2>{pages.Title}</h2>

          </Container>
        ))};
    </div>

  );
}

export async function getServerSideProps() {
  //const [posts, setPosts] = useState([]);
  const apiEndPoint = "http://localhost:1337/api/pages";
  const postRes = await axios.get("http://localhost:1337/api/pages");
  //const pages = await postRes.request();
  //axios.get(apiEndPoint).then(response => {
  //console.log(response.attributes);
  //});


  return {

    props: {

      pages: postRes.json().then((postres.attributes) => ({ postres.attributes })),
    },

  };
}
*/


const Home = ({ Pages, error }) => {
// }
 // const [Pages, setPages] = useState()
  // setPages(await res.json())

  return (
    <div>
      
      <Navigations />
     {/*  <TabbedSection /> */}
      <div className={style.main}>
      <HeroSection />
       < DropDownPaperSection />
        <Testimonial Pages={Pages} error={error} /> 
      </div>
      <CopyerightZettadaten />
    </div>
  );
}


export default Home;

export const getInitialProps = async ctx => {
  try {

    const res = await axios.get('http://localhost:1337/api/' + 'pages');
    const Pages = res.data;
    console.log(Pages);

    return { Pages };
  } catch (error) {
    return { error };
  }
};





