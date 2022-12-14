import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { signUpWithGoogle } from "../helpers/firebase";
import { useState } from "react";
import { sigIn } from "../helpers/firebase";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    sigIn(email, password, navigate);
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
           
            height: "100vh",
            borderRadius: "1rem",
            marginLeft:"1rem",
            marginRight:"1rem"
          }}
        >
          
          <Box
            textAlign="center"
            component="form"
            onSubmit={handleSubmit}
           
            noValidate
            autoComplete="off"
            sx={{ backgroundColor: "white",borderRadius:"2rem",padding:"2rem"}}
          >
            <Typography component="h1" variant="h5" color="secondary" sx={{marginBottom:"1rem"}}>
            Sign in
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
              sx={{marginBottom:"1rem"}}
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
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
            />

            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Button
                variant="contained"
                type="submit"
                sx={{ marginTop: "1rem" }}
              >
                Login
              </Button>
              <Button
                variant="outlined"
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
};

export default Login;
