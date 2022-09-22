import "./App.css";
import React from "react";
import AppRouter from "./app-router/AppRouter";
import AuthContextProvider from "./contexts/AuthContext";
// import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div>
      <AuthContextProvider>
        <AppRouter />
        {/* <ToastContainer/> */}
      </AuthContextProvider>
    </div>
  );
}

export default App;
