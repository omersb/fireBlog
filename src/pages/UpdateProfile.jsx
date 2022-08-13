import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useState } from "react";
import { updateUser } from "../helpers/firebase";

const UpdateProfile = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  const [displayName, setDisplayName] = useState(currentUser.displayName);
  const [photoURL, setPhotoURL] = useState(currentUser.photoURL);
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    updateUser(displayName, photoURL, navigate);
  };
  console.log(currentUser.displayName);
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
        sx={{
          width: 500,
          border: "2px solid #eee",
        }}
      >
        <Box
          component="img"
          style={{ width: "100%" }}
          src={currentUser.photoURL}
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
          ──── Update Profile ────
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
            id="displayName"
            label="Display Name"
            name="displayName"
            autoComplete="displayName"
            autoFocus
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <TextField
            sx={{ mb: 3 }}
            margin="normal"
            required
            fullWidth
            name="photoURL"
            label="Photo Url"
            type="url"
            id="photoURL"
            autoComplete="current-password"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
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

export default UpdateProfile;
