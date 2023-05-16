import React, {useState} from "react";
import Carousel from 'react-material-ui-carousel'
import { Box } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import LandscapeImages from "./Images/LandscapeImages";


function ImageGroupOld() {

    const [time/*, setTime*/] = useState(4000);
    const [duration/*, setDuration*/] = useState(500);
    // const [start, setStart] = useState(false);
    // eslint-disable-next-line
    const [index, setIndex] = useState(Math.floor(Math.random() * LandscapeImages.length));

    return (
        // <Im src={"https://ik.imagekit.io/n0n43lnbd/default-image.jpg"}/>
        <Carousel
            sx={{width: '90%', maxWidth: '700px'}}
            indicators={false}
            navButtonsAlwaysVisible={false}
            interval={time}

            // next = {() => {
            //     if (!start) {
            //         setTime(4000);
            //         setDuration(500);
            //         setStart(true);
            //     }
            // }}
            index={index}
            duration={duration}

            NextIcon={<ArrowForwardIosIcon/> }          
            PrevIcon={<ArrowBackIosNewIcon/>}            
        >
            {
                //LandscapeImages.map( (image) => <Im key={image} src={image}/>)
                [<Im key={'hello'} src={"https://ik.imagekit.io/n0n43lnbd/default-image.jpg"} />]
                //LandscapeImages.map( (image) => <Im key={image} src={"https://ik.imagekit.io/n0n43lnbd/default-image.jpg"} />)
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

export default ImageGroupOld;