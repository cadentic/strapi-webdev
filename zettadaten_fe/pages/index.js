import axios from "axios";
import Head from "next/head";
import * as React from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

import styles from "../styles/Home.module.css";

function notificationsLabel(count) {
  if (count === 0) {
    return 'no notifications';
  }
  if (count > 99) {
    return 'more than 99 notifications';
  }
  return `${count} notifications`;
}



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">
            Next.js!</a> integrated with{" "}
          <a href="https://mui.com/">Material-UI!</a>
        </h1>
        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>
            pages/index.js</code>
        </p>
        <IconButton aria-label={notificationsLabel(100)}>
          <Badge badgeContent={100} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>

      </main>
    </div>
  );
}

//export async function getServerSideProps() {
 // const postRes = await axios.get("http://localhost:1337/page");

  //return {

    //props: {

      //pages: postRes.data,
    //},
  
  //};
//}