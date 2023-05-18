import React from "react";
import Header from "../../Components/Header/Header";
import { Box, Stack, Typography, Button } from '@mui/material';
import NotFoundImage from '../../Components/ImageGroup/Images/NotFound/Copy of IMG_1639.JPG';
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import ImageOffset from "../../Components/ImageGroup/ImageOffset";

function NotFound2() {

    let navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return(
        <Box>
            <Header />
            <Stack spacing={2} marginRight={{xs: '20px', md: '100px'}} marginLeft={{xs: '20px', md: '100px'}} marginTop={{xs: 5, md: 10}} marginBottom={{xs: 5, md: 10}}>
                <Stack direction="row" spacing={15} display={{xs: 'none', md: 'flex'}}>
                    <Stack width='50%' spacing={5}>
                        <Typography variant="h1" color="primary.main">404</Typography>
                        <Typography variant="body1" fontSize='1.5rem' >The page you were looking for was not found.</Typography>
                        
                        <Button color="secondary" variant="contained" sx={{fontSize: '1.2rem', maxWidth: '200px', borderRadius: '50px'}} onClick={handleClick}>Return Home</Button>
                    </Stack>
                    
                    <Box width='40%'>
                        <ImageOffset src={NotFoundImage} color="primary.faint" />
                    </Box>
                </Stack>


                <Stack spacing={10} display={{xs: 'flex', md: 'none'}} alignItems='center'>
                    <Stack width='100%' spacing={3} alignItems='center'>
                        <Typography variant="h1" color="primary.main" textAlign='center'>404</Typography>
                        <Typography variant="body1" fontSize='1.5rem'>The page you were looking for was not found.</Typography>
                        
                        <Button color="secondary" variant="contained" sx={{fontSize: '1.2rem', maxWidth: '200px', borderRadius: '50px'}} onClick={handleClick}>Return Home</Button>
                    </Stack>
                    
                    <Stack width='80%' alignItems='center'>
                        <ImageOffset src={NotFoundImage} color="primary.faint" />
                    </Stack>
                </Stack>
            </Stack>
            <Footer />
        </Box>
    );
}

export default NotFound2;