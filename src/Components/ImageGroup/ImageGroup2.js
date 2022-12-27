import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Images from './Images/Images';

export default function MasonryImageList() {
  return (
    <Box sx={{ width: '100%', height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        
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