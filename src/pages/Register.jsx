import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { useState } from "react";
import { createUser } from "../helpers/firebase";
import { useNavigate } from "react-router-dom";
import { signUpWithGoogle } from "../helpers/firebase";

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
    <Grid
      container
      justifyContent="center"
      direction="row-reverse"
      sx={{
        height: "100vh",
        p: 2,
      }}
    >
      <Box
        textAlign="center"
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
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
          />
        </div>
        <div>
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
          />
        </div>
        <div>
          <Button variant="contained" type="submit" sx={{ marginTop: "1rem" }}>
            Register
          </Button>
        </div>
        <div>
          <Button
            variant="outlined"
            sx={{ marginTop: "1rem" }}
            onClick={handleGoogleProvider}
          >
            With Google
          </Button>
        </div>
      </Box>
    </Grid>
  );
}
