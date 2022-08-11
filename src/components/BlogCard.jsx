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
import { Box } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log(blog);
  return (
    <Card sx={{ width: 345, height: 450 }}>
      <Box style={{ cursor: "pointer" }}>
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
      <CardContent>
        <AccountCircle sx={{ mr: 1 }} />
        <Typography variant="p" color="black">
          {blog.email}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
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
