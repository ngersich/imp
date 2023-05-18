import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import ImageOffset from "../../../Components/ImageGroup/ImageOffset";
import Variants from "../../../Components/Animations/Variants";
import { motion } from "framer-motion";
import HoursImage from '../../../../src/Components/ImageGroup/Images/Overview2/IMG_1235.jpeg';



function Hours() {

    const academicHourText = "Mentors and mentees work one-on-one on homework and other activities. Mentees develop reading skills (e.g. reading comprehension, vocabulary) and math skills (e.g. multiplication, fractions, word problems). There is constant communication with parents to discuss goals and progress.";
    const programmingHourText = "Mentors and mentees participate in educational activities that explore various topics such as the arts, culture and diversity, self-esteem, health and nutrition, organizational and communication skills, and service to the community. These are designed by the programming committee and are led by our site supervisors."

    return (
        <Box bgcolor={"backgroundGrey.light"}>
            <Stack marginRight={{xs: '20px', md: '100px'}} marginLeft={{xs: '20px', md: '100px'}} paddingTop={{xs: 5, md: 15}} paddingBottom={{xs: 10, md: 15}} spacing={12}  >
                <Stack direction="row" spacing={10} display={{xs: 'none', md: 'flex'}}>
                    <Box width='50%'>
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{once: true}}
                            variants={Variants.moveRight}
                        >
                            <Box><ImageOffset src={HoursImage} color="secondary.faint" direction="right" /></Box>
                        </motion.div>
                    </Box>
                    <Box width='40%'>
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{once: true}}
                            variants={Variants.fadeIn}
                        >
                            <Stack spacing={10}>
                                <Stack spacing={5}>
                                    <Typography variant="h3" color="secondary.main">Academic Hour</Typography>
                                    <Typography variant="body1">{academicHourText}</Typography>
                                </Stack>
                                <Stack spacing={5}>
                                    <Typography variant="h3" color="secondary.main">Programming Hour</Typography>
                                    <Typography variant="body1">{programmingHourText}</Typography>
                                </Stack>
                            </Stack>
                        </motion.div>
                    </Box>
                </Stack>




                <Stack spacing={10} display={{xs: 'flex', md: 'none'}} alignItems='center'>
                    <Stack alignItems='center' width='80%'>
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{once: true}}
                            variants={Variants.fadeIn}
                        >
                            <Stack alignItems='center'>
                                <ImageOffset src={HoursImage} color="secondary.faint" direction="right" />
                            </Stack>
                        </motion.div>
                    </Stack>
                    <Box>
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{once: true}}
                            variants={Variants.fadeIn}
                        >
                            <Stack spacing={5}>
                                <Stack spacing={2}>
                                    <Typography variant="h3" color="secondary.main">Academic Hour</Typography>
                                    <Typography variant="body1">{academicHourText}</Typography>
                                </Stack>
                                <Stack spacing={2}>
                                    <Typography variant="h3" color="secondary.main">Programming Hour</Typography>
                                    <Typography variant="body1">{programmingHourText}</Typography>
                                </Stack>
                            </Stack>
                        </motion.div>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
}

export default Hours;