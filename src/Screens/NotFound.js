import React from "react";
import Header from "../Components/Header/Header";
import { Box, Stack, Typography, Button } from '@mui/material';
import NotFoundImage from '../Components/ImageGroup/Images/NotFound/Copy of IMG_1639.JPG';
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

function NotFound() {

    let navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return(
        <Box>
            <Header />
            <Stack spacing={2} marginRight={{xs: '20px', md: '100px', lg: '150px'}} marginLeft={{xs: '20px', md: '100px', lg: '150px'}} marginTop='30px' alignItems="center" >
                <Typography variant="h3" textAlign='center'>404</Typography>
                <Typography variant="h5" textAlign='center'>The page you were looking for was not found.</Typography>
                <Box/>
                <Button color="secondary" variant="contained" sx={{fontSize: '1.2rem'}} onClick={handleClick}>Return Home</Button>
                <Box />
                <Box component="img" alt="notfound" src={NotFoundImage} width={{xs: '80%', md: '50%'}} />
                <Box height={50}/>
            </Stack>
            <Footer />
        </Box>
    );
}

export default NotFound;