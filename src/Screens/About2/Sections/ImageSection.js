import React from "react";
import { Box, Stack } from '@mui/material';
import ImageGroup from "../../../Components/ImageGroup/ImageGroup";
import GalleryButton from "../Components/GalleryButton";
import Variants from "../../../Components/Animations/Variants";
import { motion } from "framer-motion";

function ImageSection() {
    return (
        <Box>
            <Box display={{xs: 'none', md: 'inline'}}>
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{once: true}}
                    variants={Variants.fadeIn}
                >
                    <Box marginTop={10} marginBottom={10}>
                        <ImageGroup fullScreen={true} />
                        <GalleryButton />
                    </Box>
                </motion.div>
            </Box>

            <Stack display={{xs: 'inline', md: 'none'}} alignItems='center' marginLeft='20px' marginRight='20px'>
                <Stack alignItems='center' marginTop={5} marginBottom={5}>
                    <ImageGroup fullScreen={false} />
                    <GalleryButton />
                </Stack>
            </Stack>


        </Box>
    );
}

export default ImageSection;