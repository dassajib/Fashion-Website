import {
  AppBar,
  Box,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Menu,
  MenuItem,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React, { useState } from "react";
import { Menu as MenuIcon } from "@mui/icons-material";

const Navbar = () => {
    
  const [open, setOpen] = useState(false);

  const StyleToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const SocialBox = styled(Box)({
    display: "flex",
    cursor: "pointer",
    gap: 10,
  });

  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
  });

  const SearchBox = styled(Box)({
    display: "flex",
  });

  const MenuItems = [
    { name: "Home", Link: "/" },
    { name: "Products", Link: "#" },
    { name: "Portfolio", Link: "#" },
    { name: "Blog", Link: "#" },
    { name: "Contact Us", Link: "#" },
  ];

  return (
    <AppBar sx={{ background: "#000" }} position="static">
      <StyleToolBar>
        <SocialBox>
          <FacebookIcon/>
          <InstagramIcon/>
          <WhatsAppIcon/>
        </SocialBox>

        <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" }, cursor: "pointer" }}>
          {MenuItems.map((singleMenu) => (
            <Typography sx={{ fontSize: "14px" }}>{singleMenu.name}</Typography>
          ))}
        </MenuBox>

        <SearchBox>
          <InputBase placeholder="Search..." sx={{ color: "#fff" }}></InputBase>
          <MenuIcon
            onClick={() => setOpen(!open)}
            sx={{
              color: "#fff",
              cursor: "pointer",
              display: { xs: "block", sm: "block", md: "none" },
            }}
          />
        </SearchBox>
      </StyleToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(!open)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box sx={{ width: 350, height: "90vh" }}>
          {MenuItems.map((singleMenu) => (
            <MenuItem sx={{ fontSize: "14px", cursor: "pointer" }}>
              {singleMenu.name}
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
