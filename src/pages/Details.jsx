import AccountCircle from "@mui/icons-material/AccountCircle";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { deleteBlog } from "../helpers/firebase";

const Details = () => {
  const navigate = useNavigate();
  //! navigate ile gonderilen state(veriyi) yakalamak icin ise
  //! useLocation Hook'u kullanilabilir.
  const location = useLocation();
  const blog = location.state;
  const { currentUser } = useContext(AuthContext);
  console.log(blog);
  console.log(currentUser);
  return (
    <Container>
      <Typography
        variant="h3"
        style={{
          margin: "1rem",
          textAlign: "center",
          color: "#1976D2",
          fontFamily: "Girassol",
        }}
      >
        ──── Details ────
      </Typography>
      <Card sx={{ width: "80%", mx: "auto", my: 2 }}>
        <Box>
          <CardMedia component="img" image={blog.imgUrl} alt="Paella dish" />
          <CardContent sx={{ backgroundColor: "#f0f8ff" }}>
            <Typography
              sx={{ mb: 1, fontFamily: "Girassol", textAlign: "center" }}
              variant="h5"
              color="black"
            >
              {blog.title}
            </Typography>
            <Typography variant="p" color="#9b9b9b">
              {blog.date}
            </Typography>
            <Typography variant="body2" color="black">
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
        </CardActions>
      </Card>
      {blog.email === currentUser.email && (
        <Box sx={{ display: "flex", justifyContent: "space-evenly", mb: 8 }}>
          <Button variant="contained">Update</Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "red" }}
            onClick={() => deleteBlog(blog.id, navigate)}
          >
            Delete
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default Details;
