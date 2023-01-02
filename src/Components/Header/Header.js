import React from "react";
import { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import ImpLogo from './IMPLogo.png';
import { useNavigate } from "react-router-dom";
import { Typography, Link, Stack } from "@mui/material";

const pages = ['About IMP', 'Program Overview', 'Our Mission', 'Executive Board',  'How to Join'];

function Header(props) {

  let navigate = useNavigate();

  const handleNavigation = (page) => {
    switch(page) {
      case 'About IMP': 
        navigate("/about");
        break;
      case 'Our Mission':
        navigate("/mission");
        break;
      case 'Executive Board':
        navigate("/exec");
        break;
      case 'Program Overview':
        navigate("/overview");
        break;
      case 'How to Join':
        navigate("/join");
        break;
      case "":
        navigate("/");
        break;
      default:
        break;
    }
  };

  // const getRoute = (page) => {
  //   switch(page) {
  //     case 'About IMP': 
  //       return "/about";
  //     case 'Our Mission':
  //       return "/mission";
  //     case 'Executive Board':
  //       return "/exec";
  //     case 'Program Overview':
  //       return "/overview";
  //     case 'How to Join':
  //      return "/join";
  //     case "":
  //      return "/";
  //     default:
  //       return "/";
  //   }
  // }

  const [backdrop, setBackdrop] = useState(false);

  const handleBackdropClose = () => {
    setBackdrop(false);
  }

  // const handleBackdropOpen = () => {
  //   setBackdrop(true);
  // }

  const handleBackdropSwitch = () => {
    setBackdrop((prev) => !prev);
  }


  return (
    <Box sx={{height: 'maxHeight'}}>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{height: "80px"}}>
          <Box
            component="img"
            alt="logo"
            sx={{height: "80%", cursor: "pointer", marginRight: "30px", display: {xs: 'none', md: 'none', lg: 'flex'}}}
            src={ImpLogo}
            onClick={() => handleNavigation("")}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: 'flex',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >Illini Mentor Program
          </Typography>
          <Box sx={{flexGrow: 1}} />

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleBackdropSwitch}
              color="inherit"
            >
              {backdrop ? <CloseIcon /> : <MenuIcon />}
            </IconButton >
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                // href={getRoute(page)}
                onClick={(() => {
                  handleNavigation(page);
                })}
                sx={props.currentPage === page ? 
                  {my: 2, color: 'white', display: 'block', borderBottom: '2px solid white', borderRadius: '0', paddingRight: '0', paddingLeft: '0', marginRight: '10px', marginLeft: '10px'}
                :
                  {my: 2, color: 'white', display: 'block'}
                }
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

    <Box
      sx={{display: {xs: backdrop ? 'flex' : 'none', md: 'none'}, width: '1', height: '100vh', zIndex: (theme) => theme.zIndex.drawer + 1}}
      bgcolor='primary.main'
      onClick={handleBackdropClose}
    >
      <Stack sx={{width: '100%'}} alignItems="center">
        {pages.map((page) => (
              <Button
                key={page}
                // href={getRoute(page)}
                onClick={(() => {
                  handleNavigation(page);
                })}
                sx={
                  props.currentPage === page ? 
                  {my: 2, color: 'secondary.main', display: 'block', fontSize: '1.4rem'}
                  :
                  {my: 2, color: 'white', display: 'block', fontSize: '1.4rem'}
                }
              >
                {page}
              </Button>
            ))}
      </Stack>
    </Box>
  </Box>
  );
}
export default Header;
