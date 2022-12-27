import React from "react";
import Header from "../Components/Header/Header";
import { Typography, Box, Stack } from "@mui/material";
import MasonryImageList from "../Components/ImageGroup/ImageGroup2";
import Footer from "../Components/Footer/Footer";

function About() {
    return (
        <Box>
            <Header currentPage="About IMP"/>
            <Stack spacing={2} marginRight={{xs: '20px', md: '100px'}} marginLeft={{xs: '20px', md: '100px'}} marginTop='30px' >
                    <Typography variant="h3" textAlign='center'>About IMP</Typography>
                    <Typography variant="body1" >The Illini Mentor Program is a registered student organization at the University of Illinois. The program is a student-directed initiative to work closely with children in the Champaign-Urbana community by creating one-on-one mentoring relationships. IMP focuses on the academic, personal, and social development of our mentees while striving to integrate university life with the community. College students from Illinois meet with their "mentee" once a week at either Dr. William Elementary School, Thomas Paine Elementary School, or the Don Moyer Boys and Girls Club throughout the school year. It is not uncommon for mentor-mentee pairs to work together for multiple years! The bonds and relationships created in the Illini Mentor Program between our amazing mentors and mentees is truly very special!</Typography>
                    <MasonryImageList />
            </Stack>
            <Box height={'200px'} />
            <Footer />
            
        </Box>
    );
}

export default About;