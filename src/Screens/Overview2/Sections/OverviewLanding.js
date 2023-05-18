import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import ImageOffset from "../../../Components/ImageGroup/ImageOffset";
import OverviewImage from '../../../../src/Components/ImageGroup/Images/Overview2/IMG_8755.png';


function OverviewLanding() {

    const initialText = "Mentors and mentees commit to a full academic year of consistent participation in the program. Mentoring occurs once per week for two hours with a focus on building positive relationships between the children and young adults. The sessions emphasize academic support and enrichment activities to help children build developmental assets that will help them to be healthy, successful, and responsible citizens.";

    return (

        <Box marginRight={{xs: '20px', md: '100px'}} marginLeft={{xs: '20px', md: '100px'}} marginTop={{xs: 5, md: 10}} marginBottom={10} >
            <Stack direction="row" spacing={7} display={{xs: 'none', md: 'flex'}}>
                <Stack width='50%' spacing={5}>
                    <Typography variant='h1' color='primary.main'>Program Overview</Typography>
                    <Typography variant="body1" fontSize='1.3rem'>
                        {initialText}
                    </Typography>
                </Stack>
                <Box width='50%'>
                    <ImageOffset src={OverviewImage} color="primary.faint" direction="left" />
                </Box>
            </Stack>



            <Stack spacing={7} display={{xs: 'flex', md: 'none'}} alignItems='center'>
                <Stack spacing={5} alignItems='center'>
                    <Typography variant='h1' color='primary.main' textAlign='center'>Program Overview</Typography>
                    <Typography variant="body1" fontSize='1.3rem'>
                        {initialText}
                    </Typography>
                </Stack>
                <Stack width='80%' alignItems='center'>
                    <ImageOffset src={OverviewImage} color="primary.faint" direction="left" />
                </Stack>
                
            </Stack>
        </Box>
    );
}

export default OverviewLanding;