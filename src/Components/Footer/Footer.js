import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {TextField} from "@mui/material";
import ImpLogo from './IMPLogo.png';
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiFilledInput-root": {
        backgroundColor: "rgb(65, 86, 125)",
        fontSize: '0.9rem',
        color: "#fff"
      },
      "& .MuiFilledInput-root:hover": {
        backgroundColor: "#4e6897",
        color: "#fff",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "#4e6897",
          color: "#fff"
        }
      },
      "& .MuiFilledInput-root.Mui-focused": {
        backgroundColor: "#4e6897",
        color: "#fff"
      },
      "& .MuiInputLabel-root": {
        fontSize: "0.95rem",
        color: "#fff"
      }
    }
  }));

function Footer(props) {

  const classes = useStyles();

  let navigate = useNavigate();
  const instagramUrl = "https://www.instagram.com/impuofi/";
  const handleInstagram = () => {
    window.open(instagramUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box sx={{height: 'maxHeight'}}>
    <AppBar position="static" sx={{display: {xs: 'none', md: 'flex'}}}>
       <Container maxWidth="xl" >
        <Toolbar disableGutters sx={{height: "140px"}}>
        <Stack direction="row" height="100%" width="100%" alignItems="center" justifyContent="space-between">
          <Box
            component="img"
            alt="logo"
            sx={{height: "80%", cursor: "pointer"}}
            src={ImpLogo}
            onClick={() => navigate("/")}
          />
          <Stack spacing={1}>
            <Typography variant="h5">Connect with us</Typography>
            <Stack direction="row" spacing={8} marginTop="5px">
                <Stack>
                    <Typography variant="h6">Email</Typography>
                    <Typography variant="body2">impuofi@gmail.com</Typography>
                </Stack>
                <Stack>
                    <Typography variant="h6">Instagram</Typography>
                    <Stack direction="row" spacing={1} onClick={handleInstagram} sx={{cursor: 'pointer'}} >
                        <InstagramIcon />
                        <Typography variant="body2">@impuofi</Typography>
                    </Stack>
                </Stack>
            </Stack>
          </Stack>
          <Stack spacing={.5} >
            <Typography variant="h5">Stay informed</Typography>
            <Typography variant="body2">Enter your email to receive updates when applications open.</Typography>
            <Box height="1px"></Box>
            <Stack direction="row" justifyContent="space-between">
                <TextField variant="filled" label="Email Address" size="small" className={classes.root} sx={{width: "75%"}}  />
                <Button color="secondary" variant="contained">Sign Up</Button>
            </Stack>
          </Stack>
          </Stack>
        </Toolbar>
      </Container> 
    </AppBar>

    <AppBar position="static" sx={{display: {xs: 'flex', md: 'none'}}}>
    <Container maxWidth="xl" >
        <Toolbar disableGutters sx={{height: "390px"}}>
        <Stack alignItems="center" height="100%" width="100%" >
        <Box
            component="img"
            alt="logo"
            sx={{height: "100px", cursor: "pointer", margin: "10px"}}
            src={ImpLogo}
            onClick={() => navigate("/")}
        />
            <Typography variant="h5">Connect with us</Typography>
            <Stack direction="row" spacing={8} marginTop="5px">
                <Stack>
                    <Typography variant="h6">Email</Typography>
                    <Typography variant="body2">impuofi@gmail.com</Typography>
                </Stack>
                <Stack>
                    <Typography variant="h6">Instagram</Typography>
                    <Stack direction="row" spacing={1} onClick={handleInstagram} sx={{cursor: 'pointer'}} >
                        <InstagramIcon />
                        <Typography variant="body2">@impuofi</Typography>
                    </Stack>
                </Stack>
            </Stack>

        <Stack alignItems="center" sx={{width: "95%", maxWidth: "500px"}} >
            <Typography variant="h5" sx={{marginTop: "25px", marginBottom: "5px"}}>Stay informed</Typography>
            <Typography variant="body2" textAlign="center">Enter your email to receive updates when applications open.</Typography>
            <Box height="5px"></Box>
            <Stack direction="row" justifyContent="space-between" width="100%">
                <TextField variant="filled" label="Email Address" size="small" className={classes.root} sx={{width: "100%"}}  />
                <Button color="secondary" variant="contained" sx={{width: "120px", marginLeft: "15px"}}>Sign Up</Button>
            </Stack>
        </Stack>

        </Stack>      
        </Toolbar>
    </Container> 
    </AppBar>
</Box>



  );
}
export default Footer;
