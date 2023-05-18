import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import ImageOffset from "../../../Components/ImageGroup/ImageOffset";
import MissionImage1 from '../../../../src/Components/ImageGroup/Images/About2/IMG_5428.jpg';
import Variants from "../Components/Variants";
import { motion } from "framer-motion";


function Mission() {
    const firstText = "The Illini Mentor Program is an award-winning registered student organization at the University of Illinois dedicated to fostering meaningful and consistent mentoring relationships between University students and children in the local community with the goal of supporting learning, growth, skill-building, and interracial and cultural understanding. As a co-curricular service-learning organization, IMP provides opportunities for Illinois students to learn more about the community and build leadership skills as they take an active role in promoting positive youth development."; 
    const missionStatement = " IMP’s mission includes engaging students in the process of building bridges between the University of Illinois and the surrounding community, which can lead to productive and mutually beneficial dialogue, capacity-building, and a commitment to civic responsibility.";

    return (
        <Box bgcolor='backgroundGrey.light'>
            <Stack marginRight={{xs: '20px', md: '70px'}} marginLeft={{xs: '20px', md: '70px'}} paddingTop={15} paddingBottom={15} spacing={10} bgcolor='backgroundGrey.light' >
                <Stack direction="row" spacing={10} >
                    <Box width='40%'>
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{once: true}}
                            variants={Variants.fadeIn}
                        >
                            <Stack spacing={5}>
                                <Typography variant="h3">Our Mission</Typography>
                                <Stack spacing={4}>
                                    <Typography variant="body1">
                                        {firstText}
                                    </Typography>
                                    <Typography variant="body1" sx={{fontStyle: 'italic'}}>{missionStatement}</Typography>
                                </Stack>
                            </Stack>
                        </motion.div>
                    </Box>
                    <Box width='60%'>
                        <motion.div
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{once: true}}
                                variants={Variants.moveLeft}
                        >
                            <Box>
                                <ImageOffset src={MissionImage1} color="primary.faint" direction="left" />
                            </Box>
                        </motion.div>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
}

export default Mission;