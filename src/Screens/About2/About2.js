import React from "react";
import Header from "../../Components/Header/Header";
import { Box } from "@mui/material";
import Initial from "./Sections/Initial";
import OneOnOne from "./Sections/OneOnOne";
import Mission from './Sections/Mission';
import History from './Sections/History';
import Recognition from "./Sections/Recognition";
import Footer from "../../Components/Footer/Footer";
import ImageSection from './Sections/ImageSection';

function About2() {


    return (
        <Box>
            <Header currentPage="About IMP"/>
            <Initial />
            <OneOnOne />
            <ImageSection />
            <Mission />
            <History />
            <Recognition />
            <Footer />
        </Box>
    );
}

export default About2;