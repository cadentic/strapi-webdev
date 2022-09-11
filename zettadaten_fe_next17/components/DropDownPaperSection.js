import React from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Devider from '@mui/material/Divider';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import style from '../styles/Home.module.css';
import { css } from '@emotion/react';
import { Portal, Rating, Paper, Card, Box, CardHeader, CardContent, CardMedia, CardActions, Toolbar, Typography, Collapse } from '@mui/material';

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

const DropDownPaperSection = ({ Pages, error }) => {
  const [expanded, setExpanded] = React.useState(false);
  const container = React.useRef(null);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  if (error) {
    return <div className={style.Container} >An error occured: {error.message}</div>;
  }
  return (
    <React.Fragment>
      <Toolbar sx={{ bgcolor: '#e7e3df' }} spacing={2} xs={2}>
      {Pages.data.map(Pages => (
        //<div classname={style.main}> 

        <Box key={`$Pages.id`} variant='outlined' spacing={2 } elevation={1} style={{  margin: "16px 0px", border: "1px solid black" }}
          css={css`
          color: #20b2aa;
          :hover {
            color: #2e8b57;
          }
        `} sx={{ flexDirection: 'column', flexWrap: 'wrap' }} enableSpacing>
          {/* {Pages.attributes.Title}
           {Pages.attributes.createdAt}
        */}
          <Box sx={{ flexDirection: 'column', padding: "16px", flexWrap: 'wrap' }}>

            <Typography variant="body2" color="text.secondary" className="hover:bg-violet-300">
              {Pages.attributes.Title}</Typography>
          </Box>
        
          <Box enableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </Box>
          
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Portal container={container.current} key={`$Pages.id`}>
            <Typography paragraph padding="10px">

              <Box sx={{ my: 8, spacing: 10, margin: 2 }} key={`$Pages.id`}>  {Pages.attributes.Description} </Box></Typography>
            <Devider />
            <Box sx={{ my: 8, spacing: 10, margin: 2 }} key={`$Pages.id`}>  {Pages.attributes.Content} </Box>
            </Portal>
          </Collapse>
          <Box sx={{ p: 1, my: 1, border: '1px solid', flexWrap: 'wrap', flexGrow: 1 }} key={`$Pages.id`} ref={container} />
        </Box>    
        
      ))} </Toolbar>
    </React.Fragment>
  )
}

export default DropDownPaperSection
