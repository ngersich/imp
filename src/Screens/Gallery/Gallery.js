import React from "react";
import { Box, Stack, Typography } from '@mui/material';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import MasonryImageList from "../../Components/ImageGroup/MasonryImageList";


function Gallery() {

    return (
        <Box>
            <Header currentPage="" />
            <Stack spacing={2} marginRight={{xs: '20px', md: '100px'}} marginLeft={{xs: '20px', md: '100px'}} marginTop='30px' alignItems="center" >
                <Typography variant="h1" textAlign='center' sx={{marginBottom: '20px'}} color="primary.main">Gallery</Typography>
                <MasonryImageList />
                <Box sx={{height: '100px'}} />
            </Stack>
            <Footer />
        </Box>
    );
}

export default Gallery;

