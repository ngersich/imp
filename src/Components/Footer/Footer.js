import React from "react";
import { AppBar, Box, Toolbar, Container, Button, Stack, Typography, Link } from '@mui/material';
import ImpLogo from './IMPLogo.png';
// import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
// import { makeStyles } from "@mui/styles";
// import axios from "axios";
// import validator from 'validator';


// const useStyles = makeStyles((theme) => ({
//     root: {
//       "& .MuiFilledInput-root": {
//         backgroundColor: "rgb(65, 86, 125)",
//         fontSize: '0.9rem',
//         color: "#fff"
//       },
//       "& .MuiFilledInput-root:hover": {
//         backgroundColor: "#4e6897",
//         color: "#fff",
//         // Reset on touch devices, it doesn't add specificity
//         "@media (hover: none)": {
//           backgroundColor: "#4e6897",
//           color: "#fff"
//         }
//       },
//       "& .MuiFilledInput-root.Mui-focused": {
//         backgroundColor: "#4e6897",
//         color: "#fff"
//       },
//       "& .MuiInputLabel-root": {
//         fontSize: "0.95rem",
//         color: "#fff"
//       }
//     }
//   }));

function Footer(props) {

  // const classes = useStyles();
  let navigate = useNavigate();

  // const [email, setEmail] = useState("");
  // const [alertType, setAlertType] = useState("");
  // const [alertOpen, setAlertOpen] = useState(false);
  // const [alertText, setAlertText] = useState("");

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  const instagramUrl = "https://www.instagram.com/impuiuc/";
  const handleInstagram = () => {
    window.open(instagramUrl, '_blank', 'noopener,noreferrer');
  };

  // const handleSignUp = () => {

  //   if (!validator.isEmail(email)) {
  //     setAlertOpen(true);
  //     setAlertType("error");
  //     setAlertText("Please enter a valid email address.");
  //     return;
  //   }

  //   const date = new Date();
  //   const dateString = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();

  //   axios.post('https://sheet.best/api/sheets/10b48f9b-a5c4-4da5-8dbc-02f6e81b83f9', {"email": email, "date": dateString})
  //   .then(response => {
  //     setAlertOpen(true);
  //     setAlertType("success");
  //     setAlertText("Email was successfully added to our mailing list.");
  //     setEmail("");
  //   }).catch( e => {
  //     axios.post('https://sheet.best/api/sheets/61be34ca-fbe9-4a08-b887-608d3f60ec22', {"email": email, "date": dateString})
  //     .then(response => {
  //       setAlertOpen(true);
  //       setAlertType("success");
  //       setAlertText("Email was successfully added to our mailing list.");
  //       setEmail("");
  //     }).catch(e => {
  //       setAlertOpen(true);
  //       setAlertType("error");
  //       setAlertText("There was an error processing your email. If the issue persists, please contact impuofi@gmail.com or check back later when applications open.")
  //     })
  //   })
  // };


  return (
    <Box sx={{height: 'maxHeight'}}>
    {/* <Collapse in={alertOpen}>
        <Alert
        severity={alertType}
        variant="filled"
        action={
            <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
                setAlertOpen(false);
            }}
            >
            <CloseIcon fontSize="inherit" />
            </IconButton>
        }
        sx={{ mb: 2 }}
        >
        {alertText}
        </Alert>
    </Collapse> */}
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
                    <Link href='mailto:impuofi@gmail.com' variant="body2" underline="hover" color='#fff'>impuofi@gmail.com</Link>
                </Stack>
                <Stack>
                    <Typography variant="h6">Instagram</Typography>
                    <Stack direction="row" spacing={1} onClick={handleInstagram} sx={{cursor: 'pointer'}} >
                        <InstagramIcon />
                        <Typography variant="body2">@impuiuc</Typography>
                    </Stack>
                </Stack>
            </Stack>
          </Stack>
          <Stack spacing={.5} sx={{width: '400px'}} >
            <Typography variant="h5">Stay informed</Typography>
            <Typography variant="body2">Fill out our interest form to be added to our mailing list.</Typography>
            <Box height="1px"></Box>
            {/* <Stack direction="row" justifyContent="space-between">
                <TextField variant="filled" label="Email Address" size="small" value={email} onChange={handleEmailChange} className={classes.root} sx={{width: "75%"}}  />
                <Button color="secondary" variant="contained" onClick={handleSignUp}>Sign Up</Button>
            </Stack> */}
            <Button color="secondary" variant="contained" href='https://forms.gle/53kSe9R1xfNqRzWU7' sx={{width: '350px'}}>Mentor Interest Form</Button>
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
                    <Link href='mailto:impuofi@gmail.com' variant="body2" underline="none" color='#fff'>impuofi@gmail.com</Link>
                </Stack>
                <Stack>
                    <Typography variant="h6">Instagram</Typography>
                    <Stack direction="row" spacing={1} onClick={handleInstagram} sx={{cursor: 'pointer'}} >
                        <InstagramIcon />
                        <Typography variant="body2">@impuofi</Typography>
                    </Stack>
                </Stack>
            </Stack>

        <Stack alignItems="center" sx={{width: '95%', maxWidth: "500px"}} >
            <Typography variant="h5" sx={{marginTop: "25px", marginBottom: "5px"}}>Stay informed</Typography>
            <Typography variant="body2" textAlign="center" >Fill out our interest form to be added to our mailing list.</Typography>
            <Box height="5px"></Box>
            {/* <Stack direction="row" justifyContent="space-between" width="100%">
                <TextField variant="filled" label="Email Address" size="small" className={classes.root} sx={{width: "100%"}} value={email} onChange={handleEmailChange}  />
                <Button color="secondary" variant="contained" sx={{width: "120px", marginLeft: "15px"}} onClick={handleSignUp}>Sign Up</Button>
            </Stack> */}
            <Button color="secondary" variant="contained" href='https://forms.gle/53kSe9R1xfNqRzWU7' sx={{width: '300px'}}>Mentor Interest Form</Button>
        </Stack>

        </Stack>      
        </Toolbar>
    </Container> 
    </AppBar>
</Box>



  );
}
export default Footer;
