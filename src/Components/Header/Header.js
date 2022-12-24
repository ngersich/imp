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
import Item from '@mui/material/ListItem'
import { Backdrop } from "@mui/material";
import ImpLogo from './IMPLogo.png';
import './Header.css';
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";

const pages = ['About IMP', 'Our Mission', 'Recognition', 'Program Overview', 'How to Join'];

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
      case 'Recognition':
        navigate("/recognition");
        break;
      case 'Program Overview':
        navigate("/overview");
        break;
      case 'How to Join':
        navigate("/join");
        break;
      default:
        break;
    }
  };

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [backdrop, setBackdrop] = useState(false);

  const handleBackdropClose = () => {
    setBackdrop(false);
  }

  const handleBackdropOpen = () => {
    setBackdrop(true);
  }

  const handleBackdropSwitch = () => {
    setBackdrop((prev) => !prev);
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <Box sx={{height: 'maxHeight'}}>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{height: "80px"}}>
          <Box
            component="img"
            alt="logo"
            sx={{height: "80%"}}
            src={ImpLogo}
            onClick={() => handleNavigation("About IMP")}
          />
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: 'flex',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Illini Mentor Program
          </Typography> */}
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
                onClick={(() => {
                  handleCloseNavMenu();
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
      <Stack sx={{width: '1'}}>
        {pages.map((page) => (
              <Button
                key={page}
                onClick={(() => {
                  handleCloseNavMenu();
                  handleNavigation(page);
                })}
                sx={{my: 2, color: 'white', display: 'block'}}
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
