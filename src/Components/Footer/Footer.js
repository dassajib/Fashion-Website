import { Box, Stack, Typography, styled } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React from "react";

const SocialBox = styled(Box)({
  display: "flex",
  cursor: "pointer",
  gap: 10,
  color: "white",
});

const Footer = () => {
  return (
    <Box sx={{ background: "black" }}>
      <Stack direction={{ xs: "column", md: "row" }} p={7}>
        <Box flex={1}>
          <Typography color="white" align="center">
            Dhaka,Bangladesh
          </Typography>
          <Typography color="white" align="center">
            Phone: 01742623585
          </Typography>
          <Typography color="white" align="center">
            Email: sajibdas.sd@gmail.com
          </Typography>
        </Box>
        <Box flex={1}>
          <Typography color="white" align="center">
            Latest Trend
          </Typography>
          <Typography color="white" align="center">
            New Products
          </Typography>
          <Typography color="white" align="center">
            Delivary Information
          </Typography>
        </Box>
        <Box flex={1}>
          <Typography color="white" align="center">
            Categories
          </Typography>
          <Typography color="white" align="center">
            Coming Soon
          </Typography>
          <Typography color="white" align="center">
            Testimonials
          </Typography>
          <Typography color="white" align="center">
            Conditions
          </Typography>
        </Box>
        <Box>
          <Typography color="white" align="center">
            Follow Us
          </Typography>
          <SocialBox>
            <FacebookIcon />
            <InstagramIcon />
            <WhatsAppIcon />
          </SocialBox>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
