import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Images from './Images/Images';
import { ThemeProvider, useMediaQuery } from '@mui/material';
import { useTheme, createTheme } from '@mui/material/styles';

const theme = createTheme();

export default function MasonryImageList() {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.up)

  return (
    <ThemeProvider theme={theme}>
      <ImageListHelper />
    </ThemeProvider>
  )

  
}

function ImageListHelper() {

  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down('sm'));
  const medium = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Box sx={{ width: '100%', height: 500, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={small ? 2 : (medium ? 3 : 4)} gap={8} >
        
        {Images.map((item) => (
          <ImageListItem key={item}>
            <img
              src={item}
              //srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={"IMP"}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}