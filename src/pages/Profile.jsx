import { Box, Button, CardMedia, Container, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import userPhoto from "../assets/user.jpg";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(currentUser);
  return (
    <Container>
      <Card sx={{ width: 400, mx: "auto", mt: 10, p: 3 }}>
        <CardMedia
          sx={{ width: "60%", mx: "auto", mb: 4 }}
          component="img"
          image={currentUser.photoURL ? currentUser.photoURL : userPhoto}
          alt="Profile"
        />
        <Typography
          sx={{ mb: 1, fontFamily: "Girassol", textAlign: "center" }}
          variant="h5"
          color="black"
        >
          Display Name
        </Typography>
        <Typography
          sx={{ mb: 4, textAlign: "center" }}
          variant="h5"
          color="gray"
        >
          {currentUser.displayName}
        </Typography>

        <Typography
          sx={{ mb: 1, fontFamily: "Girassol", textAlign: "center" }}
          variant="h5"
          color="black"
        >
          Email
        </Typography>
        <Typography
          sx={{ mb: 1, textAlign: "center" }}
          variant="h5"
          color="gray"
        >
          {currentUser.email}
        </Typography>
      </Card>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", my: 4 }}>
        <Button
          variant="contained"
          onClick={() =>
            navigate(`/updateprofile/${currentUser.uid}`, {
              state: currentUser
            })
          }
        >
          Update
        </Button>
      </Box>
    </Container>
  );
};

export default Profile;
