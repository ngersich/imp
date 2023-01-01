import React from "react";
// import Header from "../Components/Header/Header";
import { Stack, Typography, Box } from '@mui/material';
// import Footer from "../Components/Footer/Footer";
import RecognitionImage from '../Components/ImageGroup/Images/Recognition/recognition.jpg';

function Recognition() {
    return (
        <Box>
            {/* <Header currentPage="Recognition"/> */}
            <Stack spacing={2} marginRight={{xs: '20px', md: '100px', lg: '200px'}} marginLeft={{xs: '20px', md: '100px', lg: '200px'}} marginTop='30px' alignItems="center" >
                    <Typography variant="h3" textAlign='center'>Recognition</Typography>
                    <Typography variant="body1" >IMP strives for excellence as a learning organization and is committed to best practices in mentoring and community engagement. We have been privileged to receive the following honors and appreciate the support and recognition we’ve received from our community partners.</Typography>
                    <Box height='20px' />

                    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{width: '100%', display: {xs: 'none', md: 'flex'}}}>
                        <Stack spacing={1} >
                            <ul style={{margin: 0, padding: 10}}>
                                <li style={{fontSize: '1.3rem'}}><Typography variant="body1" sx={{fontWeight: 'bold'}}>2018 Outstanding Service Impact Award (Office of Volunteer Programs)</Typography></li>
                                <li style={{fontSize: '1.3rem'}}><Typography variant="body1" sx={{fontWeight: 'bold'}}>2013-14 Campus Award for Excellence in Public Engagement</Typography></li>
                                <li style={{fontSize: '1.3rem'}}><Typography variant="body1" sx={{fontWeight: 'bold'}}>2014 McKinley Foundation Social Justice Award</Typography></li>
                                <li style={{fontSize: '1.3rem'}}><Typography variant="body1" sx={{fontWeight: 'bold'}}>2012 McKinley Foundation Social Justice Award Honorable Mention</Typography></li>
                                <li style={{fontSize: '1.3rem'}}><Typography variant="body1" sx={{fontWeight: 'bold'}}>2011 Outstanding Service Award (Office of Volunteer Programs)</Typography></li>
                                <li style={{fontSize: '1.3rem'}}><Typography variant="body1" sx={{fontWeight: 'bold'}}>2008 Robert P. Larsen Human Development Award (Counseling Center)</Typography></li>
                                <li style={{fontSize: '1.3rem'}}><Typography variant="body1" sx={{fontWeight: 'bold'}}>2008 Outstanding Service Award (Office of Volunteer Programs)</Typography></li>
                                <li style={{fontSize: '1.3rem'}}><Typography variant="body1" sx={{fontWeight: 'bold'}}>2006 T.I.S Bookstore Outstanding Student Organization Award</Typography></li>
                            </ul>
                        </Stack>
                        <Box sx={{width: '10px'}} />
                        <Box component="img" alt="recognition" src={RecognitionImage} sx={{width: '45%', borderRadius: '10px'}} />
                    </Stack>
                    
                    <Stack  sx={{width: '100%', display: {xs: 'flex', md: 'none'}}} >
                        <Box component="img" alt="recognition" src={RecognitionImage} sx={{width: '100%', borderRadius: '10px'}} />
                        <Box sx={{height: '40px'}} />
                        <Stack spacing={1} >
                            <ul>
                                <li style={{fontSize: '1.1rem'}}><Typography variant="body2" sx={{fontWeight: 'bold'}}>2018 Outstanding Service Impact Award (Office of Volunteer Programs)</Typography></li>
                                <li style={{fontSize: '1.1rem'}}><Typography variant="body2" sx={{fontWeight: 'bold'}}>2013-14 Campus Award for Excellence in Public Engagement</Typography></li>
                                <li style={{fontSize: '1.1rem'}}><Typography variant="body2" sx={{fontWeight: 'bold'}}>2014 McKinley Foundation Social Justice Award</Typography></li>
                                <li style={{fontSize: '1.1rem'}}><Typography variant="body2" sx={{fontWeight: 'bold'}}>2012 McKinley Foundation Social Justice Award Honorable Mention</Typography></li>
                                <li style={{fontSize: '1.1rem'}}><Typography variant="body2" sx={{fontWeight: 'bold'}}>2011 Outstanding Service Award (Office of Volunteer Programs)</Typography></li>
                                <li style={{fontSize: '1.1rem'}}><Typography variant="body2" sx={{fontWeight: 'bold'}}>2008 Robert P. Larsen Human Development Award (Counseling Center)</Typography></li>
                                <li style={{fontSize: '1.1rem'}}><Typography variant="body2" sx={{fontWeight: 'bold'}}>2008 Outstanding Service Award (Office of Volunteer Programs)</Typography></li>
                                <li style={{fontSize: '1.1rem'}}><Typography variant="body2" sx={{fontWeight: 'bold'}}>2006 T.I.S Bookstore Outstanding Student Organization Award</Typography></li>
                            </ul>
                        </Stack>
                    </Stack>

            </Stack>
                {/* <Box height={'50px'} />
            <Footer /> */}
        </Box>
    );
}

export default Recognition;