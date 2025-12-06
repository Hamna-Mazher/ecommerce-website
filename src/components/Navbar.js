import React from "react";
import { AppBar, Toolbar, Box, IconButton, Button } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#FFF",
        color: "#000",
        boxShadow: "none",
        borderBottom: "1px solid #eee",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: { xs: 2, md: 10 },
          py: 1,
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Link to="/">
            <img
              src={logo}
              alt="Funiro Logo"
              style={{ width: "120px", height: "auto", cursor: "pointer" }}
            />
          </Link>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 4 }}>
          {["Home", "Shop", "Contact"].map((item) => (
            <Button
              key={item}
              component={Link}
              to={
                item === "Home"
                  ? "/"
                  : item === "Shop"
                  ? "/shop" // <-- Updated route
                  : `/${item.toLowerCase()}`
              }
              sx={{
                color: "#000",
                fontFamily: "Poppins",
                textTransform: "none",
                fontSize: 16,
                "&:hover": { color: "#B88E2F" },
              }}
            >
              {item}
            </Button>
          ))}
        </Box>

        {/* Only Cart Icon */}
        <Box>
          <IconButton component={Link} to="/cart">
            <ShoppingCartOutlinedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
