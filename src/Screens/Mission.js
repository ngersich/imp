import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { Box, Typography, Container, Stack } from '@mui/material';
import MissionImages from "../Components/ImageGroup/Images/Mission/MissionImages";

function Mission() {
    return (
        <Box>
            <Header currentPage="Our Mission" />
            <Stack spacing={2} marginRight={{xs: '20px', md: '100px'}} marginLeft={{xs: '20px', md: '100px'}} marginTop='30px' alignItems="center" >
                    <Typography variant="h3" textAlign='center'>Our History & Mission</Typography>
                    <Typography variant="body1" >IMP developed out of a youth mentoring program that was the centerpiece of an academic service-learning course taught in the Department of Psychology in the Spring of 2004. Through student leadership and relationship-building in the community, IMP was created as a co-curricular service-learning organization that could provide structure and support to sustain an effective mentoring program. IMP initiated its pilot program at Don Moyer Boys and Girls Club in the Spring of 2005 and operated programs at the Boys and Girls Club and Stratton Elementary School from 2005-2009. Prairie Elementary School (renamed Dr. Williams Elementary School) became IMP’s new partner in the Fall of 2009.</Typography>

                    <Box component="img" alt="IMP" src={MissionImages[1]} sx={{width: '90%', borderRadius: '10px', display: {xs: 'flex', md: 'none'}}} />

                    <Typography variant="body1">The Illini Mentor Program is an award-winning registered student organization at the University of Illinois dedicated to fostering meaningful and consistent mentoring relationships between University students and children in the local community with the goal of supporting learning, growth, skill-building, and interracial and cultural understanding.</Typography>

                    <Stack direction="row" sx={{display: {xs: 'none', md: 'flex'}}} >
                        <Box component="img" alt="IMP" src={MissionImages[1]} sx={{width: '33%', marginRight: '10px'}} />
                        <Box component="img" alt="IMP" src={MissionImages[0]} sx={{width: '33%', marginRight: '10px'}} />
                        <Box component="img" alt="IMP" src={MissionImages[2]} sx={{width: '33%', marginRight: '10px'}} />
                    </Stack>

                    <Box component="img" alt="IMP" src={MissionImages[2]} sx={{width: '90%', borderRadius: '10px', display: {xs: 'flex', md: 'none'}}} />

                    <Typography variant="body1">Today, IMP facilitates an active site-based mentoring program during the fall/spring semesters in collaboration with Don Moyer Boys and Girls Club and Dr. Williams Elementary School. The program at the Boys & Girls Club operates on Saturdays mornings and is open to children ages 8-10. The after-school programs at Dr. Williams Elementary School and Thomas Paine Elementary School run on Tuesdays and Wednesdays and are open to children in 3rd-5th grade.</Typography>
                    <Box component="img" alt="IMP" src={MissionImages[0]} sx={{width: '90%', borderRadius: '10px', display: {xs: 'flex', md: 'none'}}} />

                    <Typography variant="body1">As a co-curricular service-learning organization, IMP provides opportunities for Illinois students to learn more about the community and to explore their strengths and build leadership skills as they take an active role in promoting positive youth development. <i>IMP’s mission includes engaging students in the process of building bridges between the University of Illinois and the surrounding community, which can lead to productive and mutually beneficial dialogue, capacity-building, and a commitment to civic responsibility.</i></Typography>

            </Stack>
            <Box height={'50px'} />
            <Footer />
        </Box>
    );
}

export default Mission;