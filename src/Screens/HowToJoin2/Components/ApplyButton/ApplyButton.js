import React from "react";

import { Button, Stack, Box } from '@mui/material';
import GoogleFormIcon from './googleform.png';

function ApplyButton(props) {
    return(
        <Button 
            variant="outlined"
            color="googleForm"
            sx={{textTransform: 'none', fontSize: '1.1rem'}}
            href={props.href ? props.href : ''}
            target="_blank"
            rel="noreferrer"
        >
            <Stack direction="row" alignItems="center" spacing={3}  >
                <Box component="img" alt="google_form_icon" src={GoogleFormIcon} height={40} />
                <Box>{props.text}</Box>
            </Stack>
        </Button>
    );
}

export default ApplyButton;