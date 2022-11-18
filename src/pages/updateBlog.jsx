import React, { useContext } from "react";
import Container from "@mui/material/Container";
import blok from "../images/blok.png";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { BlogContext } from "../contexts/BlogContext";
import { AddBlog } from "../helpers/functions";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateBlog = () => {
  const {state}=useLocation();
const handleSubmit=()=>{

}

  return (
    <Container maxWidth="sm" align="center">
      <img src={state.imageUrl} width="300px" alt="" />
      {/* There is already an h1 in the page, let's not duplicate it. */}
      <Typography variant="h3" component="h2">
        <code>-UPDATE BLOG-</code>
      </Typography>
      ;
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
            "& .MuiTextField-root": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-email-input"
              label="Title"
              type="text"
              autoComplete="current-password"
              name="title"
             value={state.title}
             placeholder=""
              required
            />
          </div>
          <div>
            <TextField
              id="outlined-password-input"
              label="Image URL"
              type="text"
              autoComplete="current-password"
              name="imageUrl"
             value={state.imageUrl}
             placeholder=""
              required
              
            />
          </div>
          <div>
            <TextField
              id="standard-multiline-flexible"
              label="Content"
              type="text"
              autoComplete="current-password"
              name="content"
              value={state.content}
              required
              placeholder=""
              multiline
              rows={10}
            />
          </div>
          <div>
            <Button
              variant="contained"
              type="submit"
              sx={{ marginTop: "1rem", width: "100%" }}
            >
              update
            </Button>
          </div>
        </Box>
      </Grid>
    </Container>
  );
}

export default UpdateBlog