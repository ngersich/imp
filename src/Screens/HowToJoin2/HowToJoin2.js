import React from "react";
import Header from "../../Components/Header/Header";
import { Box, Stack, Typography, Link } from '@mui/material';
import './HowToJoin.css';
import Footer from "../../Components/Footer/Footer";
import ImageOffset from "../../Components/ImageGroup/ImageOffset";
import HowToJoinImage from '../../../src/Components/ImageGroup/Images/HowToJoin2/IMG_0434.jpg';
import ApplyButton from "./Components/ApplyButton/ApplyButton";


function HowToJoin2() {
    // const dates = [['Thursday, 8/24', '6:00-7:00 pm'], ['Monday, 8/28', '6:00-7:00 pm'], ['Tuesday, 8/29', '6:00-7:00 pm'], ['Wednesday, 8/30', '6:00-7:00 pm']];

    return (
        <Box>
            <Header currentPage="How to Join"/>
            <Stack spacing={2} marginRight={{xs: '20px', md: '100px'}} marginLeft={{xs: '20px', md: '100px'}} marginTop={{xs: 5, md: 15}} marginBottom={{xs: 5, md: 10}} >
                <Stack direction={{xs: 'column', md: "row"}} spacing={10} alignItems={{xs: 'center', md: 'center'}}>

                    <Box width={{xs: '100%', md: '55%'}}>
                        <Typography variant="h1" color="primary.main" textAlign={{xs: 'center', md: 'left'}}>How to Join IMP</Typography>
                        {/* <Typography variant="h4" textAlign="center" color="primary"><i>Spring 2024</i></Typography> */}
                        {/* <Typography variant="h5" color="secondary" sx={{paddingTop: '10px'}}><b>Applications for Fall 2024 open soon! Fill out our interest form below, and we'll contact you when applications open!</b></Typography> */}
                        <Typography variant="h5" color="secondary" sx={{paddingTop: '10px'}}>Applications for Fall 2024 are now open! Applications are due <b>Sunday, September 8 at 11:59 PM CST</b>.</Typography>
                        <Stack>
                            <Stack sx={{width: {sm: '100%', lg: '90%'}, marginTop: '20px'}}>
                                <Stack alignItems='center'>
                                    {/* <ApplyButton text='Mentor Interest Form' href='https://forms.gle/53kSe9R1xfNqRzWU7'/> */}
                                    <ApplyButton text='New Mentor Application' href='https://forms.gle/iYGyCM3jKivNVd42A'/>
                                </Stack>
                                <ol className="orderedListStyle">
                                    <li className="orderedListEl"><Typography className="listHeading" variant="body1" fontSize='1.3rem'>Attend an info session (optional):</Typography></li>
                                    <ul>
                                        {/* <li><Typography variant="body1" color="text.secondary">No info sessions currently available.</Typography></li> */}
                                        <li><Typography variant="body1" color="text.secondary" fontWeight="bold">Wednesday, 8/28 from 6-7 pm in Lincoln Hall Room 1068</Typography></li>
                                        <li><Typography variant="body1" color="text.secondary" fontWeight="bold">Thursday, 8/29 from 6-7 pm in Lincoln Hall Room 1068</Typography></li>
                                        <li><Typography variant="body1" color="text.secondary" fontWeight="bold">Wednesday, 9/4 from 6-7 pm on {<Link href="https://illinois.zoom.us/j/87620768691?pwd=GbTm7hHoQsYJX1bibONr8YtVcaf4i9.1">Zoom</Link>}</Typography>
                                            {/* <Typography variant="body1" color="text.secondary">Meeting ID: 881 5178 4755</Typography> */}
                                            {/* <Typography variant="body1" color="text.secondary">Password: 048594</Typography> */}
                                        </li>

                                    </ul>
                                    <li className="orderedListEl"><Typography className="listHeading" variant="body1" fontSize='1.3rem'>Decide whether you can commit to mentoring on Tuesdays, Wednesdays, OR Saturdays for the whole semester!​ (See <Link href="/overview" underline='always'>Program Overview</Link> page for more info.)</Typography></li>

                                    <li className="orderedListEl"><Typography variant="body1" fontSize='1.3rem' className="listHeading" >Fill out either the New Mentor Application or the Returning Mentor Application.</Typography></li>
                                    <ul>
                                        {/* <li className="applicationItems">
                                            <ApplyButton text="New Mentor Application" href="https://forms.gle/4BseuGr3zPm6iV3UA" />
                                        </li> */}
                                        <li><Typography variant="body1" color="text.secondary">See above for new mentor application.</Typography></li>
                                        <li><Typography variant="body1" color="text.secondary">Note: Returning mentor applications are accessible via email only.</Typography></li>
                                        {/* <li><Typography variant="body1" color="text.secondary">Applications currently unavailable.</Typography></li> */}
                                    </ul>
                                    <li className="orderedListEl"><Typography variant="body1" fontSize='1.3rem' className="listHeading" >Attend your interview if invited.</Typography></li>
                                </ol>
                                <Typography variant="body1" color="secondary" sx={{fontWeight: '500', fontSize: '1.2rem'}}>Shortly after, we will send out final decisions! If accepted to the program, mentoring day placements will be announced at our first MD meeting.</Typography>
                            </Stack>
                        </Stack>
                    </Box>
                        <Stack width={{xs: '80%', md: '40%'}} alignItems='center'>
                            <ImageOffset src={HowToJoinImage} color="primary.faint" />
                        </Stack>
                </Stack>

                
            </Stack>
            <Box height='80px' />
            <Footer />
        </Box>
    );
}



export default HowToJoin2;