import axios from "axios";
import Head from "next/head";
//import * as React from "react";
//import * as Material from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
//import Container from "@mui/material";
import style from "../styles/Home.module.css";
import { Container } from "@mui/material";
import { useState, useEffect } from "react";
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
  const [posts, setPosts] = useState([]);
  const apiEndPoint = "http://localhost:1337/api/pages";
  // const postRes = await axios.get("http://localhost:1337/api/pages");
  //const pages = await postRes.request();
  axios.get(apiEndPoint).then(response => {
    console.log(response.data);
  });


  return {

    props: {

      pages: response
    },

  };
}

*/

const Home = ({ Pages, error }) => {
  if (error) {
    return <div classname={style.Container} >An error occured: {error.message}</div>;
  }
  return (
    <div className={style.main}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.main}>
        <h1 className={style.title}>
          Welcome to <a href="https://nextjs.org">
            Next.js!</a> integrated with{" "}
          <a href="https://mui.com/">Material-UI!</a>
        </h1>
        <p className={style.description}>
          Get started by editing{" "}
          <code className={style.code}>
            pages/index.js</code>
        </p>

      </main>

      <div classname={style.card} >
        {Pages.data.map(Pages => (
          <div classname={style.main}>{Pages.attributes.Title}</div>
        ))} </div>
    </div>
  );
};

Home.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://localhost:1337/api/pages');
    const Pages = res.data;
    return { Pages };
  } catch (error) {
    return { error };
  }
};

export default Home;