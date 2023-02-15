import React from "react";
import Header from "../../Components/Header/Header";
import { Typography, Box, Stack, Button } from "@mui/material";
import ImageGroup from "../../Components/ImageGroup/ImageGroup";
import Footer from "../../Components/Footer/Footer";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './About.css';
import { useNavigate } from "react-router-dom";

function About() {

    let navigate = useNavigate();

    const handleJoinNavigation = () => {
        navigate("/join");
    };

    const handleGalleryNavigation = () => {
        navigate("/gallery");
    };

    return (
        <Box>
            <Header currentPage="About IMP"/>
            <Stack spacing={2} marginRight={{xs: '20px', md: '100px'}} marginLeft={{xs: '20px', md: '100px'}} marginTop='30px' >
                    <Typography variant="h3" textAlign='center'>About IMP</Typography>
                    <Stack direction="row" justifyContent="space-around" alignItems="center" marginTop='100px' >
                            {/* <Button onClick={handleJoinNavigation} color="secondary" variant="contained" sx={{height: '70px', borderRadius: '10px', marginTop: '30px', marginBottom: '30px', fontSize: '1.2rem' }} >
                                Join us Spring 2023!
                                <ArrowForwardIosIcon sx={{width: '0.9rem', marginLeft: '10px' }} />
                            </Button> */}
                    </Stack>
                    
                    <Stack alignItems="center" display={{xs: 'flex', md: 'flex', lg: 'none'}}>
                        <Typography variant="body1" >The Illini Mentor Program is a registered student organization at the University of Illinois. The program is a student-directed initiative to work closely with children in the Champaign-Urbana community by creating one-on-one mentoring relationships. IMP focuses on the academic, personal, and social development of our mentees while striving to integrate university life with the community. College students from Illinois meet with their "mentee" once a week at either Dr. William Elementary School, Thomas Paine Elementary School, or the Don Moyer Boys and Girls Club throughout the school year. It is not uncommon for mentor-mentee pairs to work together for multiple years! The bonds and relationships created in the Illini Mentor Program between our amazing mentors and mentees is truly very special!</Typography>
                        <Button onClick={handleJoinNavigation} color="secondary" variant="contained" sx={{height: '70px', width: '300px', borderRadius: '10px', marginTop: '30px', fontSize: '1.2rem' }} >
                                Join us Spring 2023!
                                <ArrowForwardIosIcon sx={{width: '0.9rem', marginLeft: '10px' }} />
                            </Button>
                        <Box sx={{height: '40px'}}></Box>
                            <ImageGroup />
                            <Button variant="outlined" sx={{marginTop: '20px'}} onClick={handleGalleryNavigation}>See more</Button>
                    </Stack>

                    <Stack direction="row" alignItems="center" spacing={3} display={{xs: 'none', md: 'none', lg: 'flex'}} sx={{paddingTop: '30px'}}>
                        <Stack alignItems="center" sx={{width: '85%'}}>
                            <Typography variant="body1" sx={{width: '100%', fontSize: '1.2rem'}} >The Illini Mentor Program is a registered student organization at the University of Illinois. The program is a student-directed initiative to work closely with children in the Champaign-Urbana community by creating one-on-one mentoring relationships. IMP focuses on the academic, personal, and social development of our mentees while striving to integrate university life with the community. College students from Illinois meet with their "mentee" once a week at either Dr. William Elementary School, Thomas Paine Elementary School, or the Don Moyer Boys and Girls Club throughout the school year. It is not uncommon for mentor-mentee pairs to work together for multiple years! The bonds and relationships created in the Illini Mentor Program between our amazing mentors and mentees is truly very special!</Typography>
                            <Button onClick={handleJoinNavigation} color="secondary" variant="contained" sx={{height: '70px', width: '300px', borderRadius: '10px', marginTop: '30px', fontSize: '1.2rem' }} >
                                Learn how to join!
                                <ArrowForwardIosIcon sx={{width: '0.9rem', marginLeft: '10px' }} />
                            </Button>
                        </Stack>
                    <Stack alignItems="center" sx={{width: '100%'}} spacing={2}>
                        <ImageGroup />
                        <Button variant="outlined" onClick={handleGalleryNavigation}>See more</Button>
                    </Stack>

                    </Stack>
                    
                 {/* <Stack direction="row" justifyContent="space-around" alignItems="center" >
                    <Button onClick={handleMissionNavigation} color="secondary" variant="contained" sx={{height: '70px', width: '200px', borderRadius: '10px', marginTop: '30px', marginBottom: '30px', fontSize: '1.2rem' }}>
                        Learn More
                        <ArrowForwardIosIcon sx={{width: '0.9rem', marginLeft: '10px' }} />
                    </Button>
                    
                </Stack> */}
            </Stack>

            <Box height={100} />
            {/* <Exec />
            <Box height={120} /> */}

            <Footer />
            
        </Box>
    );
}

export default About;