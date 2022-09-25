import * as React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
//import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2';
import { styled, alpha } from '@mui/material/styles';
//import Image from '@mui/material/Image';
import { Grid, ClickAwayListener, Grow, Button, MenuList, ButtonGroup, Container, Toolbar, Typography, CssBaseline, Paper, Box, AppBar, Popper } from '@mui/material';
import MuiLink from '@mui/material/Link';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import * as Colors from '@mui/material/colors';
import Image from 'next/image';
import ViewCompactRoundedIcon from '@mui/icons-material/ViewCompactRounded';


// Note that you normally won't need to set the window ref as useScrollTrigger
// will defau



const options = ['View Accounts', 'Contact Sales', 'Logedin users']

const ConditionalWrapper = ({ children, condition }) => {
  return condition ? (
    <div>{children}</div>
  ) : (
    children
  )
}


const Navigations = () => {
  //const brown = brown[900];

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
    </Menu>
  );


  return (
    <React.Fragment>
      <CssBaseline />
      <Toolbar sx={{ zIndex: 1 }}>
        <Image src="/favicon.ico" alt="lol" width="260" height="50" padding='50 0 0' />

      </Toolbar>
      <AppBar position="sticky" bgcolor="Colors.brown" maxWidth="sm" sx={{ verticalAlign: "middle",textAlign: 'center', display: 'flex', lineHeight: '10px', justifyContent: 'flex-end', top: 'auto', bottom: 7, px: 'auto', color: '#3a3632', fontcolor: '#faf8f7' }}>
        <Toolbar>
          <Grid container spacing={7} sx={{ textAlign: "center", verticalAlign: "middle"}}>

            <Grid item xs sx={{ display: 'flex' }}>

              <item>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2, hover: "outline - 2", pl: 2 }}
                >
                  <ViewCompactRoundedIcon sx={{ color: '#F1EFED' }} />
                </IconButton>
              </item>
            </Grid>
            <Grid item xs sx={{ color: '#F1EFED', ml: '5rem' }}>
              <item> <Typography variant="h6" >Product</Typography></item>

            </Grid>

            <Grid item xs sx={{ color: '#F1EFED', ml: '-5rem' }}>
              <item> <Typography variant="h6" sx={{ color: '#F1EFED' }}>Service</Typography></item>
            </Grid>

            <Grid item xs sx={{ color: '#F1EFED', ml: '-5rem' }}>
              <item> <Typography variant="h6" >Development</Typography></item>
            </Grid>


            <Grid item xs sx={{ color: '#F1EFED', ml: '-5em' }}>
              <item> <Typography variant="h6" >Contact US</Typography></item>
            </Grid>

            <Grid item xs sx={{ color: '#F1EFED', ml: '-5rem' }}>
              <item> <Typography variant="h6" >About US</Typography></item>
            </Grid>
            {/* <Typography variant="h6" gutterBottom component="div" sx={{ p: 2, pb: 0, top: 'auto', bottom: 2 }}>
            <MuiLink color="inherit" href="/">
              <HomeIcon sx={{ color: '#faf8f7' }} /> Home
            </MuiLink>{' '} 
 
          </Typography>  */}

            <Grid item xs sx={{ justifyContent: 'flex-end' }}>

              <item>
                <Box sx={{ flexGrow: 1 }} />
                <Box position='left' sx={{ display: { xs: 'none', md: 'flex' } }}>
                  <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button" >
                    <Button onClick={handleClick} sx={{ color: '#faf8f7', border: 2, hover: "outline - 2" }}>{options[selectedIndex]}</Button>
                    <Button
                      size="small"
                      aria-controls={open ? 'split-button-menu' : undefined}
                      aria-expanded={open ? 'true' : undefined}
                      aria-label="select merge strategy"
                      aria-haspopup="menu"
                      onClick={handleToggle}
                    >
                      <ArrowDropDownIcon sx={{ color: '#faf8f7', hover: "outline - 2" }} />
                    </Button>
                  </ButtonGroup>
                  <Popper
                    sx={{
                      zIndex: 1, width: '20%', justifyContent: 'flex-end', hover: "outline - 2"
                    }}
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow sx={{ zIndex: '10' }}
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                      >
                        <Paper sx={{ height: '100%' }}>
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList id="split-button-menu" autoFocusItem sx={{ color: 'error' }}>
                              {options.map((option, index) => (
                                <MenuItem
                                  key={option}
                                  disabled={index === 2}
                                  selected={index === selectedIndex}
                                  onClick={(event) => handleMenuItemClick(event, index)}
                                >
                                  {option}
                                </MenuItem>
                              ))}
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>

                </Box>
              </item>           </Grid>
          </Grid>
        </Toolbar>
      </AppBar>


    </React.Fragment>
  );
}

export default Navigations

