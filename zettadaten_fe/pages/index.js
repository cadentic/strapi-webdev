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

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const Home = ({ Pages, error }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (error) {
    return <div className={style.Container} >An error occured: {error.message}</div>;
  }
  return (
    <div className={style.main}>
      
      <Navigations />
      
      <Toolbar>
        {Pages.data.map(Pages => (
          //<div classname={style.main}> 
          
          <Card key={`$Pages.id`} sx={{ flexDirection: 'row', maxWidth: 545, borderRadius: "20px", spacing: "125px", boxShadow: "7px", alignItems: 'stretch', hover: "bg - violet - 300" }} elevation={4} position="relative"
            css={css`
          color: #20b2aa;

          :hover {
            color: #2e8b57;
          }
        `}> 
             <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[200], spacing: "5px", margin: "2px", hover: "outline - 2" }} aria-label="Technocrat">
                  TC
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={Pages.attributes.Title}
              subheader={Pages.attributes.createdAt }
              />
            <CardMedia component="img" height="200" image="/favicon.ico" alt="Paella dish" />
            {/* 
           <Image width={600} height={350} className="h-48 w-full object-cover" src={urlBuilder(Pages.attribute.image.url)} alt={post.title} />
            */}
              <CardContent>

              <Typography variant="body2" color="text.secondary" className="hover:bg-violet-300">
                  {Pages.attributes.Description}</Typography>
              </CardContent>
              <CardActions enableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                  <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>

                <Typography paragraph padding="10px">

                <Box sx={{ my: 8, spacing: 10, margin: 2 }} key={`$Pages.id`}>  {Pages.attributes.Content} </Box></Typography>
            
            </Collapse>
  
            </Card>
    //      </div>
         

        ))} </Toolbar>
    //  <CopyerightZettadaten />
    </div>
  );
};

Home.getInitialProps = async ctx => {
  try {

    const res = await axios.get('http://localhost:1337/api/' + 'pages');
    const Pages = res.data;
    return { Pages };
  } catch (error) {
    return { error };
  }
};

export default Home;

