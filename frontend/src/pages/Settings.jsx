import MainLayout from "../layouts/MainLayout";

import {
  Card,
  CardContent,
  Typography,
  FormControlLabel,
  Switch,
  Divider,
  Button,
  Stack
} from "@mui/material";

import { useState } from "react";

function Settings() {

  const [notifications, setNotifications] = useState(true);

  const [darkMode, setDarkMode] = useState(false);

  return (

    <MainLayout>

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        Settings
      </Typography>

      <Card>

        <CardContent>

          <Stack spacing={3}>

            <FormControlLabel

              control={
                <Switch

                  checked={notifications}

                  onChange={() =>
                    setNotifications(!notifications)
                  }

                />
              }

              label="Enable Notifications"

            />

            <Divider />

            <FormControlLabel

              control={
                <Switch

                  checked={darkMode}

                  onChange={() =>
                    setDarkMode(!darkMode)
                  }

                />
              }

              label="Dark Mode"

            />

            <Divider />

            <Button
              variant="contained"
              color="primary"
            >
              Save Settings
            </Button>

          </Stack>

        </CardContent>

      </Card>

    </MainLayout>

  );

}

export default Settings;