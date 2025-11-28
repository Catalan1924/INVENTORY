import React, { useContext, useState } from "react";

// MUI core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// MUI theme hook
import { useTheme } from "@mui/material/styles";

// Icons
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// Contexts
import { AuthContext } from "../auth/AuthContext";
import { ColorModeContext } from "../theme/ColorModeContext";

export default function TopNavbar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const { user, logout } = useContext(AuthContext);

  const isDark = theme.palette.mode === "dark";

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: "100%",
        ml: "240px",
        backgroundColor: isDark ? "#1a1f36" : "#ffffff",
        color: isDark ? "#fff" : "#000",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Inventory Dashboard
        </Typography>

        <Box>
          <IconButton onClick={colorMode.toggleColorMode}>
            {isDark ? (
              <LightModeIcon sx={{ color: "white" }} />
            ) : (
              <DarkModeIcon sx={{ color: "#1a1f36" }} />
            )}
          </IconButton>

          <IconButton sx={{ color: isDark ? "white" : "#1a1f36" }}>
            <NotificationsIcon />
          </IconButton>

          <IconButton
            onClick={handleOpen}
            sx={{ color: isDark ? "white" : "#1a1f36" }}
          >
            <AccountCircleIcon />
          </IconButton>

          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem disabled>{user?.username ?? "Guest"}</MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                logout();
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
