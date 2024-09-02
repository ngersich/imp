import React from "react";
import { Button } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';

function InstagramButton() {
 return (
    <Button href={'https://www.instagram.com/impuiuc/'} color="secondary" variant="contained" sx={{height: '64px', borderRadius: '64px'}} >
        <InstagramIcon fontSize='large' margin={0} padding={0} />
    </Button>
 );
}

export default InstagramButton;

