import React from "react";
import { Box } from '@mui/material';
import ImageGroup from "../../../Components/ImageGroup/ImageGroup";
import GalleryButton from "../Components/GalleryButton";
import Variants from "../Components/Variants";
import { motion } from "framer-motion";

function ImageSection() {
    return (
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
    );
}

export default ImageSection;