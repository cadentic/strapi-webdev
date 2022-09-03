import { Typography } from '@mui/material';
import Head from 'next/Head';
import React from 'react';
import Copyright from '../src/Copyright';
import style from "../styles/Home.module.css";

const FourOhFour = () => {
  return (
            <main className={style.main}>
          <Head>
              <title>Create Next App</title>
              <link rel="icon" href="/favicon.ico" />
</Head>
              <h1 className={style.title}>
                  Welcome to <a href="https://zettadaten.com">
                      CADENTIC ZETTADATEN™</a> integrated with{" "}
                  <a href="https://cadentic.net">CADENTIC®</a>

              </h1>
      <Typography variant="body2">
        <p className={style.description}>
          Get started by searching {" "}
        </p>  
        <code className={style.code}> pages/ or new keyword ; </code>
        <code className={style.code}>  We are greateful to know that you have achieved page not found url
          <p className={style.description}>   we will respond to it quickly but till then try to visit something else </p>
        </code>
          </Typography>
        
           <Copyright />
    </main>
  )
}

export default FourOhFour
