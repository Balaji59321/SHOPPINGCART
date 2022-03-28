import React, { useContext, useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Divider, FormControl } from "@mui/material";
import { Select } from "@mui/material";
import { grey } from "@mui/material/colors";
import Context from "./Context";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cart from "./Cart";
import App from "./App";

const pages = ["Home", "About"];

const Navigation = (props) => {
  const ctx = useContext(Context);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [val, setVal] = useState("Shop");
  const [disable, setDisable] = useState(true);
  useEffect(() => {
    ctx["items"].length > 0 && setDisable(false);
  }, [ctx]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const cartHandler = () => {
    props.cart();
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "white", color: "text.primary" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            flexDirection: { xs: "row-reverse", md: "row" },
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  renderValue={() => val}
                  displayEmpty
                  onChange={(e) => setVal(e.target.value)}
                  sx={{ border: "none", outline: "none" }}
                >
                  <MenuItem value={"All Products"}>All Products</MenuItem>
                  <Divider />
                  <MenuItem value={"Popular Items"}>Popular Items</MenuItem>
                  <MenuItem value={"New Arrivals"}>New Arrivals</MenuItem>
                </Select>
              </FormControl>
              <Button
                px={2}
                sx={{
                  display: "flex",
                  margin: "auto",
                  color: "text.primary",
                  bgcolor: disable ? grey[400] : grey[200],
                  cursor: disable ? "not-allowed" : "pointer",
                }}
                variant="outlined"
                onClick={() =>
                  ctx.items.length > 0
                    ? cartHandler()
                    : alert("Add Something to Cart")
                }
                // disabled={disable}
              >
                <IconButton
                  aria-label="cart"
                  sx={{ maxWidth: "100%", cursor: "inherit" }}
                >
                  {/* <StyledBadge badgeContent={4} color="secondary"> */}
                  <ShoppingCartIcon />
                  {/* </StyledBadge> */}
                </IconButton>
                <Box sx={{ color: grey[900] }}>Cart</Box>
                <Box
                  ml={1}
                  px={1}
                  sx={{ bgcolor: grey[900], borderRadius: 5, color: "white" }}
                >
                  {ctx["items"].length}
                </Box>
              </Button>
            </Menu>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Start Bootstrap
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  display: "block",
                }}
              >
                {page}
              </Button>
            ))}
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                renderValue={() => val}
                displayEmpty
                onChange={(e) => setVal(e.target.value)}
                sx={{ border: "none", outline: "none" }}
              >
                <MenuItem value={"All Products"}>All Products</MenuItem>
                <Divider />
                <MenuItem value={"Popular Items"}>Popular Items</MenuItem>
                <MenuItem value={"New Arrivals"}>New Arrivals</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {/* <BrowserRouter>
            <Link to="/cart">Go to Cart</Link>
            <Routes>
              <Route path="/" element={<App />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
            </Routes>
          </BrowserRouter> */}
          <Button
            px={2}
            sx={{
              justifyContent: "flex-end",
              display: { xs: "none", md: "flex" },
              bgcolor: disable ? grey[400] : grey[200],
              cursor: disable ? "not-allowed" : "pointer",
            }}
            variant="outlined"
            onClick={() =>
              ctx.items.length > 0
                ? cartHandler()
                : alert("Add Something to Cart")
            }
          >
            <IconButton aria-label="cart" sx={{ cursor: "inherit" }}>
              <ShoppingCartIcon />
            </IconButton>
            <Box sx={{ color: grey[900] }}>Cart</Box>
            <Box
              ml={1}
              px={1}
              sx={{ bgcolor: grey[900], borderRadius: 5, color: "white" }}
            >
              {ctx["items"].length}
            </Box>
          </Button>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Start Bootstrap
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
