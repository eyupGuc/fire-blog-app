import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useBlogFetch } from "../helpers/functions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const { state } = useLocation();
  // console.log("state geldi mi:", state);
  const navigate = useNavigate();
  // bgcolor: "#cfe8fc",
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
          <Button
            variant="contained"
            onClick={() =>
              navigate(`/updateBlog/${state.id}`, { state: state })
            }
          >
            update
          </Button>
          <Button variant="contained">delete</Button>
        </CardActions>
      </Box>
    </Container>
  );
};

export default Details;
