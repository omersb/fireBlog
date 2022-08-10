import { Box, Button, Card, TextField, Typography } from "@mui/material";
import React from "react";
import blok from "../assets/blok.png";

const NewBlog = () => {
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
        <Box component="form" noValidate sx={{ mt: 1, p: 4 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Title"
            name="title"
            autoComplete="title"
            autoFocus
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
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
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            id="outlined-multiline-static"
            label="Content"
            multiline
            rows={9}
            required
            fullWidth
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
