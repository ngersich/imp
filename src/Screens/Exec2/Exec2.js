import React from "react";
import {Box, Stack, Typography} from '@mui/material';
import ExecCard from "../../Components/ExecCard/ExecCard";
import ExecMembers from "../../Components/ExecCard/ExecMembers";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Exec2() {
    return (
        <Box>
            <Header currentPage='Executive Board' />
            <Stack spacing={2} marginRight={{xs: '20px', md: '100px'}} marginLeft={{xs: '20px', md: '100px'}} marginTop='30px' alignItems="center" >
                <Typography variant="h1" textAlign='center' color="primary.main" >Executive Board</Typography>
                {/* <Typography variant="body1" fontSize="1.3rem" textAlign="center" sx={{height: '200px'}}>Coming soon!</Typography> */}

                <Typography variant="body1" fontSize="1.3rem" textAlign="center" display={{xs: 'none', md: 'inline'}}>Hover over each picture for more information!</Typography>
                <Box sx={{width: '100%'}} display={{xs: 'none', md: 'none', lg: 'inline'}}>
                    <Stack direction="row" justifyContent="space-evenly" alignItems="center">
                        {ExecMembers.slice(0, 4).map((member) => {
                            return <ExecCard color="primary" person={member} hover={true} />
                        })}
                    </Stack>
                    <Box height={80} />
                    <Stack direction="row" justifyContent="space-evenly" sx={{width: '100%'}} >
                        {ExecMembers.slice(4, 9).map((member) => {
                            return <ExecCard color="primary" person={member} hover={true} />
                        })}
                    </Stack>
                    <Box height={80} />
                    <Stack direction="row" justifyContent="space-evenly" sx={{width: '100%'}} >
                        {ExecMembers.slice(9, 15).map((member) => {
                            return <ExecCard color="primary" person={member} hover={true} />
                        })}
                    </Stack>
                </Box>


                <Box sx={{width: '100%'}} display={{xs: 'none', md: 'inline', lg: 'none'}}>
                    <Stack direction="row" justifyContent="space-evenly" spacing={10} sx={{width: '100%'}} >
                            {ExecMembers.slice(0, 2).map((member) => {
                                return <ExecCard color="primary" person={member} hover={true} />
                            })}
                    </Stack>
                    <Box height={80} />
                    <Stack direction="row" justifyContent="space-evenly" spacing={10} sx={{width: '100%'}} >
                        {ExecMembers.slice(2, 5).map((member) => {
                            return <ExecCard color="primary" person={member} hover={true} />
                        })}
                    </Stack>
                    <Box height={80}></Box>
                    <Stack direction="row" justifyContent="space-evenly" spacing={10} sx={{width: '100%'}} >
                        {ExecMembers.slice(5, 8).map((member) => {
                            return <ExecCard color="primary" person={member} hover={true} />
                        })}
                    </Stack>
                    <Box height={80}></Box>
                    <Stack direction="row" justifyContent="space-evenly" spacing={10} sx={{width: '100%'}} >
                        {ExecMembers.slice(8, 11).map((member) => {
                            return <ExecCard color="primary" person={member} hover={true} />
                        })}
                    </Stack>
                    <Box height={80}></Box>
                    <Stack direction="row" justifyContent="space-evenly" spacing={10} sx={{width: '100%'}} >
                        {ExecMembers.slice(11, 14).map((member) => {
                            return <ExecCard color="primary" person={member} hover={true} />
                        })}
                    </Stack>
                </Box>

                <Box paddingLeft='5px'>
                    <Stack alignItems="center" display={{xs: 'inline', md: 'none', lg: 'none'}}>
                        {ExecMembers.map((member, i) => {
                            return (
                                <Box>
                                    <ExecCard color={i % 2 === 0 ? "primary" : "secondary"} person={member} hover={false} />
                                    <Box height={50} />
                                </Box>
                            )
                        })}
                    </Stack>
                </Box>

            </Stack>
            <Box height={150} />
        
            <Footer />
        </Box>
    );
}

export default Exec2;