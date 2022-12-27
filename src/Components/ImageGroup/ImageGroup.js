import React from "react";
import Carousel from 'react-material-ui-carousel'
import { Box, Button } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Images from './Images/Images';
import { maxHeight } from "@mui/system";


function ImageGroup()
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            name: "Random Name #3",
            descirption: "Hello world 3"
        },
        {
            name: "Random Name #4",
            description: "Hello world 4"
        }
    ]

    return (
        <Box >
        <Carousel
            sx={{width: {xs: '100%', md: '500px'}, maxHeight: '500px'}}
            indicators={false}
            navButtonsAlwaysVisible={true}

            NextIcon={<ArrowForwardIosIcon/> }          
            PrevIcon={<ArrowBackIosNewIcon/>}            
        >
            {
                Images.map( (image) => <Im src={image}/>)
                //items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        </Box>
    );
}

function Im(props) {
    return (
        <Box
            component="img"
            alt="IMP image"
            src={props.src}
            maxWidth={{xs: 'none', md: '500px'}}
            width={{xs: '100%'}}
        >

        </Box>
    )
}

export default ImageGroup;