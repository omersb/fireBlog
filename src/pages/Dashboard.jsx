import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import BlogCard from "../components/BlogCard";
import { getBlogs } from "../helpers/firebase";

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getBlogs().then((data) => setBlogs(data));
  }, []);

  return (
    <Box>
      <Typography
        variant="h3"
        style={{
          margin: "1rem",
          textAlign: "center",
          color: "#1976D2",
          fontFamily: "Girassol",
        }}
      >
        ──── DASHBORD ────
      </Typography>
      <Container
        style={{ gap: 50 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </Container>
    </Box>
  );
};

export default Dashboard;
