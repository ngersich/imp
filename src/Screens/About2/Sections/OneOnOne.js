import React from "react";
import {Box, Stack, Typography } from '@mui/material';
import OneOnOneImage from '../../../../src/Components/ImageGroup/Images/About2/IMG_4057.png';
import ImageOffset from "../../../Components/ImageGroup/ImageOffset";
import Variants from "../../../Components/Animations/Variants";
import { motion } from "framer-motion";

function OneOnOne(){
    const oneOnOneText = 'College students from Illinois meet with their “mentee” once a week throughout the school year at one of three sites in the Urbana-Champaign area. It is not uncommon for mentor-mentee pairs to work together for multiple years! The bonds created between our mentors and mentees is truly special!';
      
    return(
        <Box bgcolor="primary.main" >
            <Stack direction='column'>
                <Stack direction="row" display={{xs: 'none', md: 'flex'}} spacing={10} marginTop={20} marginBottom={20} marginLeft={{xs: '20px', md: '100px'}} marginRight={{xs: '20px', md: '100px'}}>
                        <Box width='50%'>
                            <motion.div
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{once: true}}
                                variants={Variants.moveRight}
                            >
                                <ImageOffset src={OneOnOneImage} color="secondary.faint" direction="right" />
                            </motion.div>
                        </Box>
                        <Box width='50%'>
                            <motion.div
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{once: true}}
                                variants={Variants.fadeIn}
                            >
                                <Stack spacing={10}>
                                    <Typography variant="h2" color="#fff">One-on-one mentoring</Typography>
                                    <Typography variant='body' color='#fff' fontSize={'1.5rem'}>{oneOnOneText}</Typography>
                                </Stack>
                            </motion.div>
                        </Box>
                </Stack>

                {/* Mobile */}
                <Stack display={{xs: 'flex', md: 'none'}} alignItems='center' spacing={10} marginTop={10} marginBottom={10} marginLeft={{xs: '20px', md: '100px'}} marginRight={{xs: '20px', md: '100px'}}>
                        <Box width='80%'>
                            <motion.div
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{once: true}}
                                variants={Variants.fadeIn}
                            >
                                <Box>
                                <ImageOffset src={OneOnOneImage} color="secondary.faint" direction="right" />
                                </Box>
                            </motion.div>
                        </Box>
                        <Box>
                            <motion.div
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{once: true}}
                                variants={Variants.fadeIn}
                            >
                                <Stack spacing={5}>
                                    <Typography variant="h2" color="#fff">One-on-one mentoring</Typography>
                                    <Typography variant='body' color='#fff' fontSize={'1.5rem'}>{oneOnOneText}</Typography>
                                </Stack>
                            </motion.div>
                        </Box>
                </Stack>
            </Stack>
        </Box>
    );
}

export default OneOnOne;