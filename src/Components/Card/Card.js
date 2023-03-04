import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Card = ({cardImage}) => {
  return (
    <Box>
        <CardMedia
            component= "img"
            height= "100%"
            image={cardImage}
            title="New Trend"
            sx={{borderRadius: "10px"}}
          />
          <CardContent>
            <Typography gutterBottom variant="body1" align="center" component="div">
              Latest Fashion
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary">
              Wearing these fashion will make everyone love's you.
            </Typography>
            <Typography variant="body2" align="center">
              It is latest trend
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary">
              We will make you feel comfort and gorgeous.
            </Typography>
          </CardContent>
    </Box>
  )
}

export default Card;