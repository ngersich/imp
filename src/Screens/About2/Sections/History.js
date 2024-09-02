import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import ImageOffset from "../../../Components/ImageGroup/ImageOffset";
import HistoryImage from '../../../../src/Components/ImageGroup/Images/About2/IMG_1079.jpg';
import Variants from "../../../Components/Animations/Variants";
import { motion } from "framer-motion";


function History() {
    const firstText = 'IMP developed out of a youth mentoring program that was the centerpiece of an academic service-learning course taught in the Department of Psychology in the Spring of 2004. Through student leadership and relationship-building in the community, IMP was created as a co-curricular service-learning organization that could provide structure and support to sustain an effective mentoring program.'
    const secondText = "IMP initiated its pilot program at Don Moyer Boys and Girls Club in the Spring of 2005 and operated programs at the Boys and Girls Club and Stratton Elementary School from 2005-2009. Prairie Elementary School (renamed Dr. Williams Elementary School) became IMP’s new partner in the Fall of 2009.";
    const firstAndSecondText = firstText +' ' + secondText;
    const thirdText = "Today, IMP facilitates an active site-based mentoring program during the fall/spring semesters in collaboration with DREAAM, Dr. Williams Elementary School, and Thomas Paine Elementary School. The program at DREAAM operates on Saturdays mornings and is open to children ages 8-10. The after-school programs at Dr. Williams and Thomas Paine Elementary School run on Tuesdays and Wednesdays and are open to children in 3rd-5th grade."

    return (
        <Stack  marginRight={{xs: '20px', md: '100px'}} marginLeft={{xs: '20px', md: '100px'}} marginTop={{xs: 0, md: 10}} marginBottom={{xs: 5, md: 10}} spacing={12} >
            <Stack direction="row" spacing={10} display={{xs: 'none', md: 'flex'}}>
                <Box width='50%'>
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{once: true}}
                        variants={Variants.moveRight}
                    >
                        <Box><ImageOffset src={HistoryImage} color="secondary.faint" direction="right" /></Box>
                    </motion.div>
                </Box>
                <Box width='40%'>
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{once: true}}
                        variants={Variants.fadeIn}
                    >
                        <Stack spacing={5}>
                            <Typography variant="h3" color="secondary.main">Our History</Typography>
                            <Stack spacing={3}>
                                <Typography variant="body1">{firstAndSecondText}</Typography>
                                <Typography variant="body1">{thirdText}</Typography>
                            </Stack>
                        </Stack>
                    </motion.div>
                </Box>
            </Stack>




            <Stack spacing={5} display={{xs: 'flex', md: 'none'}} alignItems='center'>
                <Stack width='80%' alignItems='center'>
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{once: true}}
                        variants={Variants.moveRightMobile}
                    >
                        <Box><ImageOffset src={HistoryImage} color="secondary.faint" direction="right" /></Box>
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
                            <Typography variant="h3" color="secondary.main">Our History</Typography>
                            <Stack spacing={3}>
                                <Typography variant="body1">{firstAndSecondText}</Typography>
                                <Typography variant="body1">{thirdText}</Typography>
                            </Stack>
                        </Stack>
                    </motion.div>
                </Box>
            </Stack>
            
        </Stack>
    );
}

export default History;