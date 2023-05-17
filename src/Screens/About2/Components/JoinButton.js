import React from "react";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function JoinButton(props) {
 return (
    <Button onClick={props.handleJoinNavigation} color="secondary" variant="contained" sx={{height: '64px', width: '270px', borderRadius: '50px', fontSize: '1.2rem' }} >
        Learn how to join!
        <ArrowForwardIosIcon sx={{width: '0.9rem', marginLeft: '10px' }} />
    </Button>
 );
}

export default JoinButton;

