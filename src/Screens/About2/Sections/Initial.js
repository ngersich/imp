import React from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Typography, Box } from "@mui/material";
import ImageOffset from "../../../Components/ImageGroup/ImageOffset";
import AboutImage from '../../../../src/Components/ImageGroup/Images/About2/IMG_6571.png';
import JoinButton from "../Components/JoinButton";
import InstagramButton from '../Components/InstagramButton';
import { motion } from 'framer-motion';
import Variants from "../../../Components/Animations/Variants";

function Initial() {
    const initialText = 'The Illini Mentor Program is a student-directed initiative at the University of Illinois that works closely with children in the Champaign-Urbana community. IMP focuses on the'
    const followingText = 'of our students while striving to integrate university life with the community.';

    let navigate = useNavigate();

    const handleJoinNavigation = () => {
        navigate("/join");
    };



    return (
        <Box>
            <Box marginRight={{xs: '20px', md: '100px'}} marginLeft={{xs: '20px', md: '100px'}} marginTop={10} marginBottom={10} >

                <Stack direction="row" spacing={7} display={{xs: 'none', md: 'flex'}}>
                    <Box width='50%'>
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{once: true}}
                        variants={Variants.fadeIn}
                    >
                    <Stack spacing={5}>
                        <Typography variant='h1' color='primary.main'>About IMP</Typography>
                        <Typography variant="body1" fontSize='1.3rem'>
                            {initialText}
                            <Box component="span" color="secondary.main" fontWeight='bold'> academic</Box>, 
                            <Box component="span" color="secondary.main" fontWeight='bold'> personal</Box>, and 
                            <Box component="span" color="secondary.main" fontWeight='bold'> social development </Box>
                            {followingText}
                        </Typography>
                        <Stack direction="row" alignItems='center' spacing={5}>
                            <JoinButton handleJoinNavigation={handleJoinNavigation} />
                            <InstagramButton />
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
                        <ImageOffset src={AboutImage} color="primary.faint" direction="left" />
                        </motion.div>
                    </Box>
                </Stack>

                <Stack spacing={10} display={{xs: 'flex', md: 'none'}} alignItems='center'>

                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{once: true}}
                            variants={Variants.fadeIn}
                        >
                            <Stack spacing={5} alignItems='center'>
                                <Typography variant='h1' color='primary.main' textAlign='center'>About IMP</Typography>
                                
                                <Typography variant="body1" fontSize='1.3rem'>
                                    {initialText}
                                    <Box component="span" color="secondary.main" fontWeight='bold'> academic</Box>, 
                                    <Box component="span" color="secondary.main" fontWeight='bold'> personal</Box>, and 
                                    <Box component="span" color="secondary.main" fontWeight='bold'> social development </Box>
                                    {followingText}
                                </Typography>
                                <Stack alignItems='center' spacing={2}>
                                    <JoinButton handleJoinNavigation={handleJoinNavigation} />
                                    <InstagramButton />
                                </Stack>
                            </Stack>  
                        </motion.div>
                    <Box width='80%'>
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{once: true}}
                            variants={Variants.moveLeftMobile}
                        >
                        <ImageOffset src={AboutImage} color="primary.faint" direction="left" />
                        </motion.div>
                    </Box>
                </Stack>


            </Box>
        </Box>
    );
}

export default Initial;