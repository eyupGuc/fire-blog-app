import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { DeleteBlog } from "../helpers/functions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../contexts/BlogContext";
import { AuthContext } from "../contexts/AuthContext";
import { hover } from "@testing-library/user-event/dist/hover";
import { padding } from "@mui/system";

const Details = () => {
  const { state } = useLocation();
  const { setAddBlog } = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);
  // console.log("state geldi mi:", state);
  const navigate = useNavigate();
  // bgcolor: "#cfe8fc",
  const handleButton = () => {
    navigate(`/updateBlog/${state.id}`);
    setAddBlog(state);
  };

  const handleDelete = (id) => {
    DeleteBlog(state.id, navigate);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "3rem",
      }}
    >
      <Typography variant="h4" align="center" color="secondary">
        ──── DETAILS ────
      </Typography>
      <Card sx={{ width: "65%", marginTop: "2rem" }}>
        <CardMedia
          component="img"
          height="600"
          src={state.imageUrl}
          // image={item.imageUrl}
          alt="image"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="secondary"
          >
            {state.title}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {state.content}
          </Typography>
          <Typography>
            <IconButton aria-label="add to favorites">
              <AccountCircle />
            </IconButton>
            {state.email}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="add to favorites">
              <ChatBubbleOutlineIcon />
            </IconButton>
          </Box>
          <IconButton onClick={()=>navigate(-1)}>
            <Button>
              <ArrowBackIcon />
            </Button>
          </IconButton>
        </Box>
      </Card>
      {currentUser.email === state.email && (
        <Box
          sx={{
            width: "100%",
            marginTop: "1rem",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Button variant="contained" onClick={handleButton}>
            update
          </Button>
          <Button variant="contained" onClick={handleDelete}>
            delete
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Details;
