import { Box, Grid } from "@mui/material";
import React from "react";
import fashionItem3 from "../../image/fashionItem3.jpg";
import perfumePic from "../../image/perfume.webp";
import Card from "../Card/Card";

const RecentItem = () => {
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md:1}}>
        <Grid item xs={12} sm={12} md={12}>
          <Card cardImage={perfumePic}></Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card cardImage={fashionItem3}></Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card cardImage={fashionItem3}></Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card cardImage={fashionItem3}></Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card cardImage={fashionItem3}></Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RecentItem;
