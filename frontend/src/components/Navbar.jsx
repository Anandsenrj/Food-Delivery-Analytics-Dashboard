import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  IconButton,
  Badge,
  TextField,
  InputAdornment,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsIcon from "@mui/icons-material/Settings";

function Navbar() {

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        width: "calc(100% - 260px)",
        ml: "260px",
        bgcolor: "#fff",
        color: "#111827",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Left */}
        <Box>

          <Typography
            variant="h5"
            fontWeight="bold"
          >
            Dashboard
          </Typography>

          <Typography
            color="text.secondary"
            fontSize={14}
          >
            {today}
          </Typography>

        </Box>

        {/* Center */}
        <Box width="35%">

          <TextField
            size="small"
            fullWidth
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

        </Box>

        {/* Right */}
        <Box
          display="flex"
          alignItems="center"
          gap={2}
        >

          <IconButton>

            <Badge
              badgeContent={4}
              color="error"
            >
              <NotificationsIcon />
            </Badge>

          </IconButton>

          <IconButton>

            <DarkModeIcon />

          </IconButton>

          <IconButton>

            <SettingsIcon />

          </IconButton>

          <Avatar
            sx={{
              bgcolor: "#2563EB",
            }}
          >
            A
          </Avatar>

        </Box>

      </Toolbar>

    </AppBar>
  );
}

export default Navbar;