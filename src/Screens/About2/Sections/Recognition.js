import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import ImageOffset from "../../../Components/ImageGroup/ImageOffset";
import RecognitionImage from '../../../../src/Components/ImageGroup/Images/About2/IMG_1236.jpg';
import Variants from "../../../Components/Animations/Variants";
import { motion } from "framer-motion";


function Mission() {
    const firstText = "IMP strives for excellence as a learning organization and is committed to best practices in mentoring and community engagement. We have been privileged to receive the following honors and appreciate the support and recognition we’ve received from our community partners."; 

    return (
        <Box bgcolor='backgroundGrey.light'>
            <Stack marginRight={{xs: '20px', md: '70px'}} marginLeft={{xs: '20px', md: '70px'}} paddingTop={{xs: 0, md: 10}} paddingBottom={{xs: 5, md: 10}} spacing={10} bgcolor='backgroundGrey.light' >
                <Stack direction="row" spacing={10} display={{xs: 'none', md: 'flex'}}>
                    <Box width='50%'>
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{once: true}}
                            variants={Variants.fadeIn}
                        >
                            <Stack spacing={5}>
                                <Typography variant="h3">Recognition</Typography>
                                    <Stack spacing={3}>
                                    <Typography variant="body1">{firstText}</Typography>

                                    <Stack spacing={1}>
                                        <Typography variant="h4" color="primary.main">Awards</Typography>
                                        <Stack spacing={1} >
                                            <ul style={{margin: 0, padding: 10}}>
                                                <li style={{fontSize: '1.3rem'}}><Typography variant="body1" >2018 Outstanding Service Impact Award (Office of Volunteer Programs)</Typography></li>
                                                <li style={{fontSize: '1.3rem'}}><Typography variant="body1" >2013-14 Campus Award for Excellence in Public Engagement</Typography></li>
                                                <li style={{fontSize: '1.3rem'}}><Typography variant="body1" >2014 McKinley Foundation Social Justice Award</Typography></li>
                                                <li style={{fontSize: '1.3rem'}}><Typography variant="body1" >2012 McKinley Foundation Social Justice Award Honorable Mention</Typography></li>
                                                <li style={{fontSize: '1.3rem'}}><Typography variant="body1">2011 Outstanding Service Award (Office of Volunteer Programs)</Typography></li>
                                                <li style={{fontSize: '1.3rem'}}><Typography variant="body1" >2008 Robert P. Larsen Human Development Award (Counseling Center)</Typography></li>
                                                <li style={{fontSize: '1.3rem'}}><Typography variant="body1" >2008 Outstanding Service Award (Office of Volunteer Programs)</Typography></li>
                                                <li style={{fontSize: '1.3rem'}}><Typography variant="body1" >2006 T.I.S Bookstore Outstanding Student Organization Award</Typography></li>
                                            </ul>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </motion.div>
                    </Box>
                    <Box width='50%'>
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{once: true}}
                            variants={Variants.moveLeft}
                        >
                            <Box>
                                <ImageOffset src={RecognitionImage} color="primary.faint" direction="left" />
                            </Box>
                        </motion.div>
                    </Box>
                </Stack>





                <Stack spacing={5} display={{xs: 'flex', md: 'none'}} alignItems='center'>
                    <Stack width='80%' alignItems='center'>
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{once: true}}
                            variants={Variants.moveLeftMobile}
                        >
                            <Box>
                                <ImageOffset src={RecognitionImage} color="primary.faint" direction="left" />
                            </Box>
                        </motion.div>
                    </Stack>
                    <Box>
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{once: true}}
                            variants={Variants.fadeIn}
                        >
                            <Stack spacing={4}>
                                <Typography variant="h3">Recognition</Typography>
                                    <Stack spacing={3}>
                                    <Typography variant="body1">{firstText}</Typography>

                                    <Stack spacing={1}>
                                        <Typography variant="h4" color="primary.main">Awards</Typography>
                                        <Stack spacing={1} >
                                            <ul style={{margin: 0, padding: 10}}>
                                                <li style={{fontSize: '1.3rem'}}><Typography variant="body1" >2018 Outstanding Service Impact Award (Office of Volunteer Programs)</Typography></li>
                                                <li style={{fontSize: '1.3rem'}}><Typography variant="body1" >2013-14 Campus Award for Excellence in Public Engagement</Typography></li>
                                                <li style={{fontSize: '1.3rem'}}><Typography variant="body1" >2014 McKinley Foundation Social Justice Award</Typography></li>
                                                <li style={{fontSize: '1.3rem'}}><Typography variant="body1" >2012 McKinley Foundation Social Justice Award Honorable Mention</Typography></li>
                                                <li style={{fontSize: '1.3rem'}}><Typography variant="body1">2011 Outstanding Service Award (Office of Volunteer Programs)</Typography></li>
                                                <li style={{fontSize: '1.3rem'}}><Typography variant="body1" >2008 Robert P. Larsen Human Development Award (Counseling Center)</Typography></li>
                                                <li style={{fontSize: '1.3rem'}}><Typography variant="body1" >2008 Outstanding Service Award (Office of Volunteer Programs)</Typography></li>
                                                <li style={{fontSize: '1.3rem'}}><Typography variant="body1" >2006 T.I.S Bookstore Outstanding Student Organization Award</Typography></li>
                                            </ul>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </motion.div>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
}

export default Mission;