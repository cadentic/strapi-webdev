import Head from 'next/Head';
import Copyright from '../src/Copyright';
import style from "../styles/Home.module.css";

function Error({ statusCode }) {
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
            <p className={style.description}>
    Get started by searching {" "}
    <code className={style.code}>
      pages/ or new keyword </code>
  </p>
            <p className={style.description}> 
    {statusCode
        ? ` An error ${statusCode} occurred on server `
        : 'An error occurred on client'}
</p>
        <Copyright />
</main>
    );
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error