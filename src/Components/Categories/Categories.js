import { Box, Stack, styled, Typography } from "@mui/material";
import React from "react";
import mensProduct from "../../image/mensShop.jpg";
import womensProduct from "../../image/womensShop.jpeg";
import kidsProduct from "../../image/kidsShop.webp";

const StyledBox = styled(Box)({
  height: 200,
  width: "100%",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "6px",
});

const StyledTypography = styled(Typography)({
  margin: "25% 50px 25% 50px",
  background: "#fff",
  opacity: "0.8",
});

const Categories = () => {
  return (
    <Box>
      <Stack direction={{xs: "column", sm: "row"}} marginTop={4} spacing={{xs: 2, sm: 4}}>
        <StyledBox sx={{backgroundImage: `url(${mensProduct})`}}>
          <StyledTypography variant="h4" align="center">
            Men
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{backgroundImage: `url(${womensProduct})`}}>
          <StyledTypography variant="h4" align="center">
            Women
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{backgroundImage: `url(${kidsProduct})`}}>
          <StyledTypography variant="h4" align="center">
            Kid
          </StyledTypography>
        </StyledBox>
      </Stack>
    </Box>
  );
};

export default Categories;
