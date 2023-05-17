import React from "react";
import {Box, Stack, Typography } from '@mui/material';
import OneOnOneImage from '../../../../src/Components/ImageGroup/Images/About2/IMG_4057.png';
import ImageOffset from "../../../Components/ImageGroup/ImageOffset";

function OneOnOne(){
    const oneOnOneText = 'College students from Illinois meet with their “mentee” once a week throughout the school year at one of three sites in the Urbana-Champaign area. It is not uncommon for mentor-mentee pairs to work together for multiple years! The bonds created between our mentors and mentees is truly special!'

    return(
        <Box bgcolor="primary.main" >
            <Stack direction='column'>
                <Stack direction="row" spacing={10} marginTop={20} marginBottom={20} marginLeft={{xs: '20px', md: '100px'}} marginRight={{xs: '20px', md: '100px'}}>
                    <Box width='50%'>
                        <ImageOffset src={OneOnOneImage} color="secondary.faint" direction="right" />
                    </Box>
                    <Stack width='50%' spacing={10}>
                        <Typography variant="h2" color="#fff">One-on-one mentoring</Typography>
                        <Typography variant='body' color='#fff' fontSize={'1.5rem'}>{oneOnOneText}</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
}

export default OneOnOne;