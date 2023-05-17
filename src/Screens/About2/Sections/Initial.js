import React from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Typography, Box } from "@mui/material";
import ImageOffset from "../../../Components/ImageGroup/ImageOffset";
import AboutImage from '../../../../src/Components/ImageGroup/Images/About2/IMG_6571.png';
import JoinButton from "../Components/JoinButton";
import InstagramButton from '../Components/InstagramButton';


function Initial() {
    const initialText = 'The Illini Mentor Program is a student-directed initiative at the University of Illinois that works closely with children in the Champaign-Urbana community. IMP focuses on the academic, personal, and social development of our students while striving to integrate university life with the community.';

    let navigate = useNavigate();

    const handleJoinNavigation = () => {
        navigate("/join");
    };



    return (
        <Stack  marginRight={{xs: '20px', md: '100px'}} marginLeft={{xs: '20px', md: '100px'}} marginTop={10} marginBottom={10} >
            <Stack direction="row" spacing={7}>
                <Stack width='50%' spacing={5}>
                    <Typography variant='h1' color='primary.main'>About IMP</Typography>
                    <Typography variant="body1" fontSize='1.3rem'>{initialText}</Typography>
                    <Stack direction="row" alignItems='center' spacing={5}>
                        <JoinButton handleJoinNavigation={handleJoinNavigation} />
                        <InstagramButton />
                    </Stack>
                    
                </Stack>
                <Box>
                    <ImageOffset src={AboutImage} width={600} color="primary.faint" direction="left" />
                </Box>
            </Stack>
        </Stack>
    );
}

export default Initial;