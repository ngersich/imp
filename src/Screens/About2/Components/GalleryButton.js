import React from "react";
import { Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function GalleryButton() {
    let navigate = useNavigate();

    const handleGalleryNavigation = () => {
        navigate("/gallery");
    };

    return (
        <Stack alignItems='center'>
            <Button variant="contained" color="secondary" sx={{marginTop: '20px', borderRadius: '30px'}} onClick={handleGalleryNavigation} >
                See more
                <ArrowForwardIosIcon sx={{width: '0.9rem', marginLeft: '10px' }} />
            </Button>
        </Stack>
    );
}

export default GalleryButton;