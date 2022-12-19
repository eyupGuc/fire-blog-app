import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useBlogFetch } from "../helpers/functions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
  const { blogList } = useBlogFetch();

  const [favPlus] = useState("");
   console.log(blogList);
  const navigate = useNavigate();



  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      {blogList?.map((item) => {

        return (
          <Card key={item.id} sx={{ maxWidth: 345 }}>
            <IconButton
              onClick={() => navigate(`/detail/${item.id}`, { state: item })}
            >
              <CardMedia
                component="img"
               
                src={item.imageUrl}
                // image={item.imageUrl}
                alt="image"
              />
            </IconButton>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="secondary"
              >
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.primary">
                {item.content}
              </Typography>
              <Typography variant="body2" color="secondary" marginTop="1rem">
                {item.date}
              </Typography>
              <Typography>
                <IconButton aria-label="add to favorites">
                  <AccountCircle />
                </IconButton>
                {item.email}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <Typography>{favPlus}</Typography>
              <IconButton aria-label="add to favorites">
                <ChatBubbleOutlineIcon />
              </IconButton>
              <Typography>0</Typography>
            </CardActions>
          </Card>
        );
      })}
    </Box>
  );
};

export default Dashboard;
