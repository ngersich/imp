import React, { useState } from "react";
import { Typography, Box, Stack, Link } from "@mui/material";

function ExecCard(props) {
    const [display, setDisplay] = useState(false);
    const isLongName = props.person.name.length > 20
    return (
        <Box height={180} onMouseOver={() => setDisplay(true)} onMouseLeave={() => setDisplay(false)}>
        <Box bgcolor={props.color === "primary" ? "primary.main" : "secondary.main"} width={display || !props.hover ? 360 : 0} height={190} />
            <Stack direction="row" sx={{transform: 'translate(-15px, -180px)', /*width: '365px'*/}} >
                <Stack alignItems="center">
                    <Box 
                        component="img"
                        alt={props.person.role}
                        src={props.person.src} 
                        height={200}
                        width={150}
                        sx={{cursor: 'pointer'}}
                    />
                    <Typography fontSize="1.3rem" variant="body1" textAlign="center" fontWeight="bold" width={150} color="primary" display={!display && props.hover ? 'inline' : 'none'}>{props.person.firstName}</Typography>
                </Stack>
                <Stack sx={{marginLeft: '15px', width:'200px'}} spacing={.5} display={display || !props.hover ? 'flex' : 'none'}>
                    <Typography variant="body1" color="#fff" fontWeight='bold' fontSize={isLongName ?"1rem" : "1.5rem"}>{props.person.name}</Typography>
                    <Box sx={{width: '240px', transform: 'translateX(-15px)'}} bgcolor = {props.color === "primary" ? "secondary.main" : "primary.main"}>
                        <Typography color="#fff" fontWeight="bold" textTransform="uppercase" variant="body2" sx={{marginLeft: '15px'}}>{props.person.role}</Typography>
                    </Box>
                    <Stack sx={{marginRight: '50px', height: '100px'}} justifyContent="space-evenly" >
                        <Typography variant="body2" color="#fff" ><b>Year: </b>{props.person.year}</Typography>
                        <Typography variant="body2" color="#fff" ><b>Major: </b>{props.person.major}</Typography>
                        <Typography variant="body2" color="#fff" ><b>Contact: </b>
                        <Link underline="hover" href={'mailto:' + props.person.contact} color="#fff">{props.person.contact}</Link>
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
}


export default ExecCard;