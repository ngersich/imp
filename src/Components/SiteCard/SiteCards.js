import React from "react";
import SiteCard from "./SiteCard";
import { Stack, Box } from "@mui/material";


function SiteCards() {
    return (
        <Box>
            <Stack direction="row" alignItems="center" justifyContent='space-between' sx={{display: {xs: 'none', md: 'none', lg: 'flex'}}}>
                <SiteCard siteNum={0} />
                <SiteCard siteNum={1} />
                <SiteCard siteNum={2} />
            </Stack>
            <Stack alignItems={{xs: "center", md: "flex-start"}} spacing={5} sx={{display: {xs: 'flex', md: 'flex', lg: 'none'}}}>
                <SiteCard siteNum={0} />
                <SiteCard siteNum={1} />
                <SiteCard siteNum={2} />
            </Stack>
        </Box>
    )
}

export default SiteCards;