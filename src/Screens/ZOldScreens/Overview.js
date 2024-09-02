import React, { useState } from "react";
import Header from "../Components/Header/Header";
import { Box, Stack, Typography, Alert, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Footer from "../Components/Footer/Footer";
import SiteCards from "../Components/SiteCard/SiteCards";

function Overview() {
    const [infoOpen, setInfoOpen] = useState(true);

    return (
        <Box>
            <Header currentPage="Program Overview"/>
            <Stack spacing={2} marginRight={{xs: '20px', md: '100px', lg: '150px'}} marginLeft={{xs: '20px', md: '100px', lg: '150px'}} marginTop='30px' >
                    <Typography variant="h3" textAlign='center'>Program Overview</Typography>
                    <Typography variant="body1" sx={{fontSize: '1.2rem'}}><u>Site-based One-on-One Youth Mentoring</u></Typography>
                    <Typography variant="body1">Mentors and mentees commit to a full academic year of consistent participation in the program. Mentoring occurs once per week for two hours with a focus on building positive relationships between the children and young adults and learning from those experiences. The sessions emphasize academic support, reading, and enrichment activities to help children build developmental assets that will help them to be healthy, successful, and responsible citizens. Activities include topics such as the arts, culture and diversity, self-esteem, health and nutrition, organizational and communication skills, and service to the community. </Typography>
                    <Typography variant="body1"><b><i>*Mentors carpool to the sites each week from the Illini Union. Start times indicated below are when mentors are expected to meet at the Union, and end times are around when mentors will return.*</i></b></Typography>

                    <Typography variant="body1" sx={{fontSize: '1.2rem'}}><u>Program Sites</u></Typography>

                    <Collapse in={infoOpen}>
                        <Alert
                        severity="info"
                        action={
                            <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setInfoOpen(false);
                            }}
                            >
                            <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                        >
                        Click on a site for more information!
                        </Alert>
                    </Collapse>

                    <SiteCards />

            </Stack>
            <Box height={'100px'} />
            <Footer />
            
        </Box>
    );
}

export default Overview;