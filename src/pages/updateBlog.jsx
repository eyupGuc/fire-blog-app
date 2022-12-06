import React, { useContext } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
    <Container sx={{marginTop:"2rem"}} maxWidth="500px" align="center">
      <img src={addBlog.imageUrl} fullWidth  alt="" />
     
      <Typography variant="h3" component="h2">
        <code>-UPDATE BLOG-</code>
      </Typography>
      
      <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
           
           
            borderRadius: "1rem",
            marginLeft:"1rem",
            marginRight:"1rem"
          }}
        >
        <Box
          textAlign="center"
          component="form"
          onSubmit={handleSubmit}
          sx={{
            marginLeft:"1rem",
            marginRight:"1rem"
          }}
          noValidate
          autoComplete="off"
        >
          
            <TextField
              id="outlined-email-input"
              label="Title"
              type="text"
              autoComplete="current-password"
              name="title"
              value={addBlog.title}
              onChange={handleChange}
              placeholder=""
              fullWidth
              sx={{marginBottom:"1rem"}}
            />
          
          
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
              fullWidth
              sx={{marginBottom:"1rem"}}
            />
          
          
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
              fullWidth
             
            />
         
          
            <Button
              variant="contained"
              type="submit"
              sx={{ marginTop: "1rem", width: "100%" }}
            >
              update
            </Button>
       
        </Box>
     </Box>
    </Container>
  );
};

export default UpdateBlog;
