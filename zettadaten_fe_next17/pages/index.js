import axios from "axios";
import Head from "next/head";
import * as React from "react";
//import * as Material from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
//import Container from "@mui/material";
import style from "../styles/Home.module.css";
import Navigations from '../components/Navigation.js';
import CopyerightZettadaten from '../components/CopyerightZettadaten.js';
import { useState, useEffect } from "react";
import Image from 'next/image';
import HeroSection from "../components/HeroSection";
import TabbedSection from "../components/TabbedSection";
import DropDownPaperSection from "../components/DropDownPaperSection";
import Testimonial from "../components/Testimonial";
import Error from "next/error";
import Link from "next/link";
import FooterComponent from "../components/FooterComponent";


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
      <Head>

      </Head>
      <Navigations />
      {/*  <TabbedSection /> */}
      <div className={style.main}>
        <HeroSection />
        < DropDownPaperSection Pages={Pages} error={error} />
        <Testimonial Pages={Pages} error={error} />
      </div>
      <FooterComponent />
      <CopyerightZettadaten />
    </div>
  );
}




Home.getInitialProps = async ctx => {
  try {

    const res = await axios.get('http://localhost:1337/api/' + 'pages');
    const Pages = res.data;
//    console.log(Pages);     
    return { Pages};
  //  return { HomeAccordition };
  } catch (error) {
    return { error };
  }
/*
  let Pages =
  "'http://localhost:1337/api/' + 'pages'";
let homeAaccorditions =
  "'http://localhost:1337/api/' + 'home-accorditions'";
let Menus =
  "'http://localhost:1337/api/' + 'menus'";

let HeroSections =
 "'http://localhost:1337/api/' + 'hero-sections'";
const requestPages = axios.get(Pages);
const requesthomeAaccorditions = axios.get(homeAaccorditions);
const requestMenus = axios.get(Menus);
const requestHeroSections = axios.get(HeroSections);

axios
  .all([requestPages, requesthomeAaccorditions, requestMenus, requestHeroSections])
  .then(
    axios.spread((...responses) => {
      const requestPages = responses[0];
      const requesthomeAaccorditions = responses[1];
      const requestMenus = responses[2];
      const requesthomeAaccorditions = responses[3];

      // use/access the results
      console.log(requestPages, requesthomeAaccorditions, requestMenus, requesthomeAaccorditions );
    })
  )
  .catch(errors => {
    // react on errors.
    console.error(errors);
  });
*/
};

export default Home;
//Home.getInitialProps = getInitialProps;




