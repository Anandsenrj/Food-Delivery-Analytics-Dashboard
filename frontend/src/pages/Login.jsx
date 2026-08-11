import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";

import { login } from "../services/auth";

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    setError("");

    try {

      await login(username, password);

      navigate("/");

    } catch (err) {

      setError("Invalid Username or Password");

    }

  };

  return (

    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#EEF2FF",
      }}
    >

      <Paper
        elevation={8}
        sx={{
          width: 420,
          padding: 5,
          borderRadius: 4,
        }}
      >

        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          mb={1}
        >
          FoodTrack
        </Typography>

        <Typography
          color="text.secondary"
          textAlign="center"
          mb={4}
        >
          Food Delivery Analytics Dashboard
        </Typography>

        {error && (

          <Alert
            severity="error"
            sx={{ mb: 2 }}
          >
            {error}
          </Alert>

        )}

        <form onSubmit={handleLogin}>

          <TextField

            label="Username"

            fullWidth

            margin="normal"

            value={username}

            onChange={(e) =>
              setUsername(e.target.value)
            }

          />

          <TextField

            label="Password"

            type="password"

            fullWidth

            margin="normal"

            value={password}

            onChange={(e) =>
              setPassword(e.target.value)
            }

          />

          <Button

            variant="contained"

            fullWidth

            sx={{
              mt: 3,
              py: 1.5,
            }}

            type="submit"

          >

            Login

          </Button>

        </form>

      </Paper>

    </Box>

  );

}

export default Login;