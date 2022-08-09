import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import cw from "../assets/cw.jpeg";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { logOut } from "../helpers/firebase";

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { currentUser } = useContext(AuthContext);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  console.log(currentUser);
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img style={{ width: "40px" }} src={cw} alt="Clarusway" />
            </IconButton>
          </Link>
          <Typography
            style={{ textAlign: "center", fontSize: "2rem" }}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontFamily: "Girassol",
              }}
              to="/"
            >
              Fire Blog
            </Link>
          </Typography>
          {/* currentUser.email.split("@")[0] emailin ilk kısmını aldık */}
          {currentUser && (
            <Typography>
              {currentUser.displayName
                ? currentUser.displayName
                : currentUser.email.split("@")[0]}
            </Typography>
          )}
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
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
              {currentUser ? (
                <>
                  <MenuItem onClick={handleClose}>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/profil"
                    >
                      Profil
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/newblog"
                    >
                      New
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link
                      onClick={() => logOut()}
                      style={{ textDecoration: "none", color: "black" }}
                      to="/"
                    >
                      Logout
                    </Link>
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem onClick={handleClose}>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/login"
                    >
                      Login
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/register"
                    >
                      Register
                    </Link>
                  </MenuItem>{" "}
                </>
              )}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
