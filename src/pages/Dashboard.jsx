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
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
  const { isLoading, blogList } = useBlogFetch();
  const [favControl, setFavControl] = useState(true);
  const [favPlus, setFavPlus] = useState(0);
  // console.log(blogList);
  const navigate = useNavigate();

  const handleFav = () => {
    console.log("fav clicked");
    if (favControl) {
      setFavPlus(favPlus + 1);
      setFavControl(false);
    } else {
      setFavPlus(favPlus - 1);
      setFavControl(true);
    }
  };

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {blogList?.map((item) => {
        return (
          <Grid
            margin={3}
            item
            xs={6}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            key={item.id}
          >
            <Card sx={{ maxWidth: 345 }}>
              <IconButton>
                {" "}
                <CardMedia
                  onClick={() =>
                    navigate(`/detail/${item.id}`, { state: item })
                  }
                  component="img"
                  height="140"
                  src={item.imageUrl}
                  // image={item.imageUrl}
                  alt="green iguana"
                />
              </IconButton>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  {item.content}
                </Typography>
                <Typography>
                  <IconButton aria-label="add to favorites">
                    <AccountCircle />
                  </IconButton>
                  {item.email}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton onClick={handleFav} aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <Typography>{favPlus}</Typography>
                <IconButton aria-label="add to favorites">
                  <ChatBubbleOutlineIcon />
                </IconButton>
                <Typography>0</Typography>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Dashboard;
