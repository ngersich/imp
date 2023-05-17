import React from "react";
import Header from "../../Components/Header/Header";
import { Typography, Box, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Initial from "./Sections/Initial";
import OneOnOne from "./Sections/OneOnOne";
import ImageGroup from "../../Components/ImageGroup/ImageGroup";
import Mission from './Sections/Mission';
import History from './Sections/History';
import GalleryButton from "./Components/GalleryButton";
import Recognition from "./Sections/Recognition";
import Footer from "../../Components/Footer/Footer";



function About2() {

    

    let navigate = useNavigate();

    const handleGalleryNavigation = () => {
        navigate("/gallery");
    };

    return (
        <Box>
            
            <Header currentPage="About IMP"/>
            <Initial />
            <OneOnOne />
            <Box height={50} />
            <ImageGroup fullScreen={true} />
            <GalleryButton />
            <Box height={50} />
            <Mission />
            <History />
            <Recognition />
            <Footer />

        </Box>
    );
}

export default About2;