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

const Dashboard = () => {
  const { isLoading, blogList } = useBlogFetch();
  console.log(blogList);
  return blogList?.map((item) => {
    // console.log(item.title);
    // console.log(item.imageUrl);
    return (
      <Card sx={{ maxWidth: 345 }} key={item.id}>
        <CardMedia
          component="img"
          height="140"
          src={item.imageUrl}
          // image={item.imageUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography  variant="body2" color="text.primary">
            {item.content}
          </Typography>
          <Typography>
            <IconButton aria-label="add to favorites" >
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
    );
  });
};

export default Dashboard;
