import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import IconButton from "@mui/material/IconButton";

import AccountCircle from "@mui/icons-material/AccountCircle";

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {  useNavigate } from "react-router-dom";
import blog from "../images/blog.png";
import { logOut } from "../helpers/firebase";
import { AuthContext } from "../contexts/AuthContext";

import { Button } from "@mui/material";

export default function Navbar() {
  const { currentUser } = React.useContext(AuthContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  // console.log(currentUser.email);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    // console.log("object");
    setAnchorEl(null);
    logOut();
  };
  const handleRegister = () => {
    setAnchorEl(null);
    navigate("/Register");
  };

  const handleNew = () => {
    setAnchorEl(null);
    navigate("/newBlog");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box>
            <img
              src={blog}
              style={{ height: "4rem", marginTop: "1rem" }}
              alt=""
            />
          </Box>
          <Box
            variant="h4"
            component="div"
            align="center"
            sx={{
              flexGrow: 1,
            
              
            }}
          >
            <Button
              sx={{ color: "#e6b00f", fontSize: "2rem" }}
              onClick={() => navigate("/")}
            >
              <code>{"<eGuc/>"}</code>
            </Button>
          </Box>
          {currentUser.email ? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle sx={{ fontSize: "4rem" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => navigate("/profile")}>
                  Profile
                </MenuItem>
                <MenuItem onClick={handleNew}>New</MenuItem>
                <MenuItem onClick={handleLogOut}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle sx={{ fontSize: "4rem" }}/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => navigate("/profile")}>
                  Profile
                </MenuItem>
                <MenuItem onClick={handleNew}>New</MenuItem>
                <MenuItem onClick={handleRegister}>Register</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
