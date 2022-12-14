import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import UpdateBlog from "../pages/UpdateBlog";
import UpdateProfile from "../pages/UpdateProfile";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id" element={<PrivateRouter />}>
          <Route path="" element={<Details />} />
        </Route>
        <Route path="/newblog" element={<PrivateRouter />}>
          <Route path="" element={<NewBlog />} />
        </Route>
        <Route path="/updateblog/:id" element={<PrivateRouter />}>
          <Route path="" element={<UpdateBlog />} />
        </Route>
        {/* <Route path="/profile" element={<PrivateRouter />}>
          <Route path="" element={<Profile />} />
        </Route> */}
        {/* <Route path="/updateprofile/:uid" element={<PrivateRouter />}>
          <Route path="" element={<UpdateProfile />} />
        </Route> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/updateprofile/:uid" element={<UpdateProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
