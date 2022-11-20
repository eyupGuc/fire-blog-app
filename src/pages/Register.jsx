import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Paper from "@mui/material/Paper";
import { useState } from "react";
import { createUser } from "../helpers/firebase";
import { useNavigate } from "react-router-dom";
import { signUpWithGoogle } from "../helpers/firebase";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(email, password, navigate);
    // alert("handleSubmit");
    // console.log(email);
    // console.log(password)
    setEmail("");
    setPassword("");
  };

  const handleGoogleProvider = () => {
    // console.log("google clicked")
    signUpWithGoogle(navigate);
  };

  return (
    <Paper
      style={{
        backgroundImage: `url(${`https://picsum.photos/1600/900`})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            height: "80vh",
            borderRadius: "1rem",
          }}
        >
        <Box
            textAlign="center"
            component="form"
            onSubmit={handleSubmit}
            sx={{
              "& .MuiTextField-root": { m: 1, width: "50ch",height:"12ch"  },
            }}
            noValidate
            autoComplete="off"
          >
             <Typography component="h1" variant="h5" color="secondary">
           Register
          </Typography>
            <TextField
              id="outlined-email-input"
              label="Email"
              type="email"
              autoComplete="current-password"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
            />

            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              name="password"
              placeholder="Enter your a password"
              value={password}
              required
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
            />

            <Box sx={{ display: "inline-block", justifyContent: "space-evenly" }}>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{ marginTop: "1rem" }}
              >
                Register
              </Button>

              <Button
                variant="outlined"
                fullWidth
                sx={{ marginTop: "1rem" }}
                onClick={handleGoogleProvider}
              >
                With Google
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Paper>
  );
}
