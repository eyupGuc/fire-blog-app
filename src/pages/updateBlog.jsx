import React, { useContext } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { BlogContext } from "../contexts/BlogContext";
import { EditAndUpdateBlog } from "../helpers/functions";
import { useNavigate } from "react-router-dom";
const initialValues={
  title:"",imageUrl:"",content:""
}
const UpdateBlog = () => {
  const { addBlog, setAddBlog } = useContext(BlogContext);
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    EditAndUpdateBlog(addBlog,navigate)
    setAddBlog(initialValues)
  };
  const handleChange=(e)=>{
    e.preventDefault()
    const{name,value}=e.target
    setAddBlog({...addBlog,[name]:value})
   
    // console.log(addBlog)
  

  }

  return (
    <Container maxWidth="sm" align="center">
      <img src={addBlog.imageUrl} width="300px" alt="" />
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
              value={addBlog.title}
              onChange={handleChange}
              placeholder=""
            />
          </div>
          <div>
            <TextField
              id="outlined-password-input"
              label="Image URL"
              type="text"
              autoComplete="current-password"
              name="imageUrl"
              value={addBlog.imageUrl}
              onChange={handleChange}
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
              value={addBlog.content}
              onChange={handleChange}
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
};

export default UpdateBlog;
