import { Typography } from '@mui/material';
import Head from 'next/Head';
import React from 'react';
import Copyright from '../src/Copyright';
import style from "../styles/Home.module.css";

const FourOhFour = () => {
  return (
    <main className={style.main}>
      <Head>
        <title>Buddy You Made Our Day</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography variant="h1" className={style.title}>
        Welcome to <a href="https://zettadaten.com">
          CADENTIC ZETTADATEN™</a> integrated with{" "}
        <a href="https://cadentic.net">CADENTIC®</a>

      </Typography>
      <Typography variant="body2">
        <code className={style.description}>
          Get started by searching {" "}
        </code>
        <code className={style.code}> pages/ or new keyword ; </code>
        <code className={style.code}>  We are greateful to know that you have achieved page not found url </code>
          <code className={style.description}>   we will respond to it quickly but till then try to visit something else </code>
        
      </Typography>

      <Copyright />
    </main>
  )
}

export default FourOhFour
