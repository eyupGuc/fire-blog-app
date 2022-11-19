import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { DeleteBlog} from "../helpers/functions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircle from "@mui/icons-material/AccountCircle";

import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../contexts/BlogContext";

const Details = () => {
  const { state } = useLocation();
  const {  setAddBlog } = useContext(BlogContext);
  // console.log("state geldi mi:", state);
  const navigate = useNavigate();
  // bgcolor: "#cfe8fc",
  const handleButton = () => {
    navigate(`/updateBlog/${state.id}`);
    setAddBlog(state)
    
  };

  const handleDelete=(id)=>{

    DeleteBlog(state.id,navigate)
  }

  return (
    <Container fixed sx={{ marginTop: "3rem" }}>
      <Box sx={{ height: "80vh" }}>
        <Card sx={{ maxWidth: 1000 }}>
          <Typography variant="h4" align="center">
            ---DETAILS---
          </Typography>
          <CardMedia
            component="img"
            height="600"
            src={state.imageUrl}
            // image={item.imageUrl}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {state.title}
            </Typography>
            <Typography variant="body2" color="text.primary">
              {state.content}
            </Typography>
            <Typography>
              <IconButton aria-label="add to favorites">
                <AccountCircle />
              </IconButton>
              email
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="add to favorites">
              <ChatBubbleOutlineIcon />
            </IconButton>
          </CardActions>
        </Card>
        <CardActions>
          <Button variant="contained" onClick={handleButton}>
            update
          </Button>
          <Button variant="contained" onClick={handleDelete}>delete</Button>
        </CardActions>
      </Box>
    </Container>
  );
};

export default Details;
