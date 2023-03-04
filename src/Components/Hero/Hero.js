import { Box, Typography } from "@mui/material";
import React from "react";
import HeroImage from "../../image/heroImg.jpg";

const Hero = () => {
  return (
    <Box>
      <Typography variant="h3" sx={{ textAlign: "center", fontWeight: 900 }}>
        <b style={{ color: "green" }}>Fashion's</b> Blog
      </Typography>
      <Typography variant="body2" sx={{ textAlign: "center", fontWeight: 100 }}>
        We make you look better
      </Typography>
      <Box
        sx={{
          backgroundImage: `url(${HeroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: 600,
          width: "100%",
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "50%", md: "40%" },
            padding: { xs: 2, sm: 2, md: 20 },
          }}
        >
          <Box sx={{ background: "#051e3e", borderRadius: "10px", opacity: ".8" }}>
            <Typography variant="h6" color="#fff" align="center" pt={4}>
              Trending Style
            </Typography>
            <Typography variant="h4" color="#fff" align="center">
              Life is boaring without fashion
            </Typography>
            <Typography variant="body1" color="#fff" align="center" pb={4}>
              We love to change our style
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
