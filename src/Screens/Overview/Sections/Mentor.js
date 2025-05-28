import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import ImageOffset from "../../../Components/ImageGroup/ImageOffset";
import Variants from "../../../Components/Animations/Variants";
import { motion } from "framer-motion";
import MentorImage from '../../../../src/Components/ImageGroup/Images/Overview2/IMG_6260.jpg';



function Mentor() {

    const requirementsText = "Mentors must commit to mentoring on Tuesdays, Wednesdays, or Saturdays for the entire semester. Membership requirements also include:";

    
    return (
        <Box bgcolor={"backgroundGrey.light"}>
            <Stack marginRight={{xs: '20px', md: '100px'}} marginLeft={{xs: '20px', md: '100px'}} paddingTop={{xs: 5, md: 15}} paddingBottom={{xs: 10, md: 15}} spacing={12}  >
                <Stack direction={{xs: "column", md: "row"}} spacing={10} alignItems={{xs: 'center', md: 'none'}}>
                    <Box width='50%' display={{xs: 'none', md: 'flex'}}>
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{once: true}}
                            variants={Variants.moveRight}
                        >
                            <Box><ImageOffset src={MentorImage} color="secondary.faint" direction="right" /></Box>
                        </motion.div>
                    </Box>

                    <Stack width='80%' display={{xs: 'flex', md: 'none'}} alignItems='center'>
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{once: true}}
                            variants={Variants.moveRightMobile}
                        >
                            <Box><ImageOffset src={MentorImage} color="secondary.faint" direction="right" /></Box>
                        </motion.div>
                    </Stack>


                    <Box width={{xs: '100%', md: '40%'}}>
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{once: true}}
                            variants={Variants.fadeIn}
                        >
                            <Stack spacing={7}>
                                <Stack spacing={5}>
                                    <Typography variant="h3" color="secondary.main">Who can be a Mentor?</Typography>
                                    <ul>
                                        <li><Typography variant="body1" fontSize="1.2rem">All majors</Typography></li>
                                        <li><Typography variant="body1" fontSize="1.2rem">Any year in school</Typography></li>
                                        <li><Typography variant="body1" fontSize="1.2rem">People who are dedicated</Typography></li>
                                        <li><Typography variant="body1" fontSize="1.2rem">Fun-loving</Typography></li>
                                        <li><Typography variant="body1" fontSize="1.2rem">Positive, patient, and caring</Typography></li>
                                        <li><Typography variant="body1" fontSize="1.2rem">Someone with a commitment to youth development</Typography></li>
                                    </ul>
                                </Stack>
                                <Stack spacing={3}>
                                    <Typography variant="h4" color="secondary.main">Mentor Requirements</Typography>
                                    <Stack>
                                        <Typography variant="body1">{requirementsText}</Typography>
                                        <ul>
                                            <li style={{marginBottom: '0.5rem'}}><Typography variant="body1">Attending biweekly Member Development (MD) meetings on Sunday nights at 7 pm</Typography></li>
                                            <li style={{marginBottom: '0.5rem'}}><Typography variant="body1">Attending IMP-wide field trips 1-2x a semester (typically Saturday mornings for ~2hrs)</Typography></li>
                                            <li style={{marginBottom: '0.5rem'}}><Typography variant="body1">Attending fundraisers for IMP to obtain 2 contribution points each semester</Typography></li>
                                        </ul>
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

export default Mentor;