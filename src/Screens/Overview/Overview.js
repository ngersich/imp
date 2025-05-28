import React from "react";
import { Box } from '@mui/material';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import OverviewLanding from "./Sections/OverviewLanding";
import Hours from "./Sections/Hours";
import Sites from "./Sections/Sites";
import Mentor from "./Sections/Mentor";

function Overview() {
 return (
    <Box>
        <Header currentPage="Program Overview"/>
        <OverviewLanding />
        <Hours />
        <Sites />
        <Mentor />
        <Footer />
    </Box>
 );
}

export default Overview;