import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Avatar, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { updateLike } from "../helpers/firebase";
import { useState } from "react";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BlogCard({ blog }) {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [likeState, setLikeState] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleLike = () => {
    if (currentUser) {
      if (!likeState) {
        const like = Number(blog.likeCount + 1);
        updateLike(blog.id, like);
      }
    } else {
      navigate("/login");
    }
  };
  console.log(blog);
  return (
    <Card sx={{ width: 345, height: 470 }}>
      <Box
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/details/${blog.id}`, { state: blog })}
      >
        <CardMedia
          component="img"
          height="194"
          image={blog.imgUrl}
          alt="Paella dish"
        />
        <CardContent sx={{ backgroundColor: "#f0f8ff" }}>
          <Typography
            sx={{ mb: 1, fontFamily: "Girassol" }}
            variant="h5"
            color="black"
          >
            {blog.title}
          </Typography>
          <Typography variant="p" color="#9b9b9b">
            {blog.date}
          </Typography>
          <Typography
            sx={{
              mt: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
            variant="body2"
            color="black"
          >
            {blog.description}
          </Typography>
        </CardContent>
      </Box>
      <CardContent sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          sx={{ color: "red", mr: 1 }}
          aria-label="recipe"
          src={blog.userPhoto}
        />
        <Typography variant="p" color="black">
          {blog.email}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick={handleLike} />
          <Typography sx={{ ml: 1 }}>{blog.likeCount}</Typography>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        ></ExpandMore>
      </CardActions>
    </Card>
  );
}
