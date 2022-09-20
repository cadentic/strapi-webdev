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
import { Card, Paper, Button } from '@mui/Material';
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
import MuLink from "../src/Link";
// import Testimonial from "../components/Testimonial";





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

const Testimonial = ({ Pages, error, requestMyImages }) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    if (error) {
        return <div className={style.Container} >An error occured: {error.message}</div>;
    }
    return (
        <div>
            <Toolbar xs={2} spacing={2}>
                {Pages.data.map(Pages => (
                    //<div classname={style.main}> 

                    <Paper key={`$Pages.id`} variant='outlined' elevation={1} style={{ margin: "16px 0px", border: "1px solid black" }}
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

                                </IconButton>
                            }
                            title={Pages.attributes.Title}
                            subheader={Pages.attributes.createdAt}
                        />
                        <CardMedia component="img" height="200" image={requestMyImages} alt="Paella dish" />
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
                            <Button css={css` 
  display: flex;
  align-items: center;
  justify-content: center;                          
  background-color: black;
  color: white;
  font-size: 10px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  margin-left: 10px;
  :hover {
            color: #3e2723;
            border:2px solid #3e2723;
            border-color: #3e2723;
            transition: border-color 0s ease-out 0.6s, width 0.3s ease-out 0.6s, height 0.3s ease-out .7s;
          }
`} >  Click for More </Button>
                        </Collapse>

                    </Paper>
                    //      </div>


                ))} </Toolbar>
        </div>
    );
};





export default Testimonial;