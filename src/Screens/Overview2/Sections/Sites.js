import React from "react";
import { Stack, Typography, Box, Link } from "@mui/material";
import ImageOffset from "../../../Components/ImageGroup/ImageOffset";
import Variants from "../../../Components/Animations/Variants";
import { motion } from "framer-motion";
import SiteImage from '../../../../src/Components/ImageGroup/Images/Overview2/IMG_2901.jpg';




function Sites() {

    const sitesText = "Prior to applying, mentors decide which days they would like to mentor for the entire semester."
    const sitesBoldText= " *Mentors carpool to the sites each week from the Illini Union. Start times indicated below are when mentors are expected to meet at the Union, and end times are around when mentors will return.*"
    
    return (
        <Box >
            <Stack marginRight={{xs: '20px', md: '100px'}} marginLeft={{xs: '20px', md: '50px'}} marginTop={{xs: 10, md: 15}} marginBottom={{xs: 10, md: 15}} spacing={12}  >
                <Stack direction={{xs: "column", md: "row"}} spacing={10} alignItems={{xs: 'center', md: 'flex-start'}}>
                <Stack width='80%' display={{xs: 'flex', md: 'none'}} alignItems='center'>
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{once: true}}
                            variants={Variants.moveLeftMobile}
                        >
                            <Box><ImageOffset src={SiteImage} color="primary.faint" direction="left" /></Box>
                        </motion.div>
                </Stack>
                <Box width={{xs: '100%', md: '50%'}}>
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{once: true}}
                            variants={Variants.fadeIn}
                        >
                            <Stack spacing={4}>
                                <Stack spacing={3}>
                                    <Typography variant="h3" color="primary.main">Program Sites</Typography>
                                    <Typography variant="body1">
                                        {sitesText}
                                        <Box component="span" fontWeight="bold">{sitesBoldText}</Box>
                                    </Typography>
                                </Stack>
                                <Stack spacing={1}>
                                <Typography variant="h5" color="primary.main">DREAAM (Sat)</Typography>
                                <ul>
                                    <li><Typography variant="body1">Saturday (9:45 a.m. – 12:00 noon)</Typography></li>
                                    <li><Typography variant="body1">Mentees: 8-10 y/o</Typography></li>
                                    {/* <li><Typography variant="body1">201 E. Park Street, P.O. Box 1396</Typography><Typography variant="body1">Champaign, IL 61824</Typography></li> */}
                                    {/* <li><Typography variant="body1">Phone: (217) 355-5437</Typography></li> */}
                                    <li><Link href="https://www.dreaam.org/" variant="body1">https://www.dreaam.org/</Link></li>
                                </ul>
                                </Stack>

                                <Stack spacing={1}>
                                <Typography variant="h5" color="primary.main">Dr. Williams Elementary (Tue & Wed)</Typography>
                                <ul>
                                    <li><Typography variant="body1">Tue & Wed (2:45 p.m. - 5:00 p.m.)</Typography></li>
                                    <li><Typography variant="body1">Mentees: 3rd-5th grade</Typography></li>
                                    {/* <li><Typography variant="body1">2102 E. Washington St</Typography><Typography variant="body1">Urbana, IL 61802</Typography></li> */}
                                    {/* <li><Typography variant="body1">Phone: (217) 384-3628</Typography></li> */}
                                    <li><Link href="https://drwilliams.usd116.org/" variant="body1">https://drwilliams.usd116.org/</Link></li>
                                </ul>
                                </Stack>

                                <Stack spacing={1}>
                                <Typography variant="h5" color="primary.main">Thomas Paine Elementary (Wed)</Typography>
                                <ul>
                                    <li><Typography variant="body1">Wednesday (2:45 p.m. - 5:00 p.m.)</Typography></li>
                                    <li><Typography variant="body1">Mentees: 3rd-5th grade</Typography></li>
                                    {/* <li><Typography variant="body1">1801 James Cherry Dr</Typography><Typography variant="body1">Urbana, IL 61802</Typography></li> */}
                                    {/* <li><Typography variant="body1">Phone: (217) 384-3602</Typography></li> */}
                                    <li><Link href="https://tmspaine.usd116.org/" variant="body1">https://tmspaine.usd116.org/</Link></li>
                                </ul>
                                </Stack>

                            </Stack>
                        </motion.div>
                    </Box>
                    <Box width='50%' display={{xs: 'none', md: 'flex'}}>
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{once: true}}
                            variants={Variants.moveLeft}
                        >
                            <Box><ImageOffset src={SiteImage} color="primary.faint" direction="left" /></Box>
                        </motion.div>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
}

export default Sites;