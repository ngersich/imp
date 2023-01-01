import React, {useState} from "react";
import Carousel from 'react-material-ui-carousel'
import { Box } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import LandscapeImages from "./Images/LandscapeImages";


function ImageGroup() {

    const [time, setTime] = useState(100);
    const [duration, setDuration] = useState(0);
    const [start, setStart] = useState(false);
    // eslint-disable-next-line
    const [index, setIndex] = useState(Math.floor(Math.random() * LandscapeImages.length));

    return (
        <Carousel
            sx={{width: '90%', maxWidth: '700px'}}
            indicators={false}
            navButtonsAlwaysVisible={true}
            interval={time}

            next = {() => {
                if (!start) {
                    setTime(4000);
                    setDuration(500);
                    setStart(true);
                }
            }}
            index={index}
            duration={duration}

            NextIcon={<ArrowForwardIosIcon/> }          
            PrevIcon={<ArrowBackIosNewIcon/>}            
        >
            {
                LandscapeImages.map( (image) => <Im key={image} src={image}/>)
                //items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    );
}

function Im(props) {
    return (
        <Box
            component="img"
            alt="IMP image"
            src={props.src}
            //maxWidth={{xs: 'none', md: '700px'}}
            width="100%"
            borderRadius={10}
        >

        </Box>
    )
}

export default ImageGroup;