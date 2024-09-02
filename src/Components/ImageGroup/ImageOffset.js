import React from "react";
import { Box } from '@mui/material';


function ImageOffset(props) {


    return(
        <Box width={props.width} bgcolor={props.color ? props.color : "primary.main"} sx={props.direction === "right" ?  {transform: 'translate(20px, 20px)'} : {transform: 'translate(-20px, 20px)'}}>
                <Box
                    component="img"
                    alt="IMP image"
                    src={props.src}
                    //maxWidth={{xs: 'none', md: '700px'}}
                    width='100%'
                    sx={props.direction === "right" ?  {transform: 'translate(-40px, -40px)'} : {transform: 'translate(40px, -40px)'}}
                    zIndex={1}
                />
        </Box>
    );
}

export default ImageOffset;