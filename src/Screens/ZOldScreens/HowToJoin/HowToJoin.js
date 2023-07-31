import React from "react";
import Header from "../../../Components/Header/Header";
import { Box, Stack, Typography, Link } from '@mui/material';
import ApplyButton from "./Components/ApplyButton/ApplyButton";
import JoinImage from '../../Components/ImageGroup/Images/About/IMG_0434.jpeg';
import './HowToJoin.css';
import Footer from "../../../Components/Footer/Footer";

function HowToJoin() {
    return (
        <Box>
            <Header currentPage="How to Join"/>
            <Stack spacing={2} marginRight={{xs: '20px', md: '100px', lg: '150px'}} marginLeft={{xs: '20px', md: '100px', lg: '150px'}} marginTop='30px' >
                <Typography variant="h3" textAlign='center'>How to Join IMP</Typography>
                {/* <Typography variant="h4" textAlign="center" color="primary"><i>Spring 2023</i></Typography> */}
                <Typography variant="h5" textAlign="center" color="secondary" sx={{paddingTop: '10px'}}><b>Applications for Spring 2023 have closed. Check back next fall!</b></Typography>
                <Stack alignItems="center">
                    <Stack sx={{width: {xs: '100%', md: '80%'}}}>
                        <ol className="orderedListStyle">
                            <li className="orderedListEl"><Typography className="listHeading" variant="h5">Attend an info session (optional):</Typography></li>
                            <ul>
                                <li><Typography variant="body1" color="text.secondary">No info sessions currently available.</Typography></li>
                                {/* <li>
                                    <Typography variant="body1" display="inline" color="secondary" fontWeight='bold'>Thursday, 1/26: </Typography>
                                    <Typography variant="body1" color="text.secondary" display="inline"><b>6:30-7:00 pm</b> over Zoom</Typography>
                                    <ul>
                                        <li><Typography variant="body1" color="text.secondary">Meeting ID: 995 178 6713</Typography></li>
                                        <li><Typography variant="body1" color="text.secondary">Password: IMP</Typography></li>
                                    </ul>
                                </li> */}
                            </ul>
                            <li className="orderedListEl"><Typography className="listHeading" variant="h5">Decide whether you can commit to mentoring on Tuesdays, Wednesdays, OR Saturdays for the whole semester!​ (See <Link href="/overview" underline='always'>Program Overview</Link> page for more info.)</Typography></li>
                            <ul>
                                <li><Typography variant="body1" color="text.secondary">Membership requirements also include:</Typography> </li>
                                <ul>
                                    <li><Typography variant="body1" color="text.secondary">Attending biweekly Member Development/MD meetings on Sunday nights at 7pm</Typography></li>
                                    <li><Typography variant="body1" color="text.secondary">Attending IMP-wide field trips 1-2x a semester (typically Saturday mornings for ~2hrs)</Typography></li>
                                    <li><Typography variant="body1" color="text.secondary">Attending fundraisers for IMP to obtain 2 contribution points each semester</Typography></li>
                                </ul>
                            </ul>
                            <li className="orderedListEl"><Typography variant="h5" className="listHeading" >Fill out either the New Mentor Application or the Returning Mentor Application.</Typography></li>
                            <ul>
                                {/* <li className="applicationItems">
                                    <ApplyButton text="Spring 2023 Application" href="https://forms.gle/5mG8jfE1eFgCAXZ47" />
                                </li> */}
                                {/* <li className="applicationItems"><Typography variant="body1" color="text.secondary" fontWeight="bold" >Applications due Sunday, January 29th at 11:59 pm!</Typography></li> */}
                                <li><Typography variant="body1" color="text.secondary">Applications currently unavailable.</Typography></li>
                            </ul>
                            <li className="orderedListEl"><Typography variant="h5" className="listHeading" >Attend your interview if invited.</Typography></li>
                        </ol>
                        <Typography variant="body1" color="secondary" sx={{fontWeight: '500', fontSize: '1.2rem'}}>Shortly after, we will send out final decisions! If accepted to the program, mentoring day placements will be announced at our first MD meeting.</Typography>
                    </Stack>
                    <Box component="img" alt="join_img" src={JoinImage} sx={{width: '80%', maxWidth: '500px', borderRadius: '10px', marginTop: '50px'}} />
                </Stack>
            </Stack>
            <Box height='80px' />
            <Footer />
        </Box>
    );
}

export default HowToJoin;