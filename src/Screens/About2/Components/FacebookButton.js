import React from "react";
import { Button } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';

function FacebookButton() {
 return (
    <Button href={'https://www.facebook.com/IlliniMentorProgram/'} color="secondary" variant="contained" sx={{height: '64px', borderRadius: '64px'}} >
        <FacebookIcon fontSize='large' margin={0} padding={0} />
    </Button>
 );
}

export default FacebookButton;