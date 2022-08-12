import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useState } from "react";
import blok from "../assets/blok.png";
import { AuthContext } from "../contexts/AuthContext";
import { createBlogs } from "../helpers/firebase";
const UpdateBlog = () => {
  //! navigate ile gonderilen state(veriyi) yakalamak icin ise
  //! useLocation Hook'u kullanilabilir.
  const location = useLocation();
  const blog = location.state;
  const [title, setTitle] = useState(blog.title);
  const [imgUrl, setImgUrl] = useState(blog.imgUrl);
  const [content, setContent] = useState(blog.description);
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      margin="5rem"
    >
      <Card
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ width: 500, border: "2px solid #eee" }}
      >
        <Box
          component="img"
          style={{ width: "100%" }}
          src={blog.imgUrl}
          wrapped
          ui={false}
        />

        <Typography
          variant="h4"
          style={{
            margin: "1rem",
            textAlign: "center",
            color: "#1976D2",
            fontFamily: "Girassol",
          }}
        >
          ──── Update Blog ────
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleUpdate}
          sx={{ mt: 1, p: 4 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Title"
            name="title"
            autoComplete="title"
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            sx={{ mb: 3 }}
            margin="normal"
            required
            fullWidth
            name="imgUrl"
            label="İmage Url"
            type="url"
            id="imgUrl"
            autoComplete="current-password"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
          <TextField
            id="outlined-multiline-static"
            label="Content"
            multiline
            rows={9}
            required
            fullWidth
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 0.5, py: 2 }}
          >
            Update
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default UpdateBlog;
