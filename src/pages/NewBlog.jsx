import { Box, Button, Card, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import blok from "../assets/blok.png";
import { AuthContext } from "../contexts/AuthContext";
import { createBlogs } from "../helpers/firebase";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [content, setContent] = useState("");
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toUTCString().split(" ");
    const date1 = date[2] + " " + date[1] + ", " + date[3];

    createBlogs(title, imgUrl, content, currentUser.email, date1, navigate);
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
          variant="div"
          display="flex"
          alignItems="center"
          justifyContent="center"
          style={{ borderRadius: "50%", backgroundColor: "#1976D2" }}
          sx={{ width: 200, height: 200, mx: "auto", mt: 2 }}
        >
          <Box
            component="img"
            style={{ width: "100%" }}
            src={blok}
            wrapped
            ui={false}
          />
        </Box>
        <Typography
          variant="h4"
          style={{
            margin: "1rem",
            textAlign: "center",
            color: "#1976D2",
            fontFamily: "Girassol",
          }}
        >
          ──── New Blog ────
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
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
            Submit
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default NewBlog;
