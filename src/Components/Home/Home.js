import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Categories from "../Categories/Categories";
import Hero from "../Hero/Hero";
import RecentItem from "../RecentItem/RecentItem";
import RightBar from "../RightBar/RightBar";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Container>
        <Categories />
        <hr/>
        <Stack direction={{xs: "column", sm: "column", md: "row"}} spacing={8} mt={8}>
          <Box flex={3}>
            <RecentItem />
          </Box>
          <Box flex={1}>
            <RightBar/>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
