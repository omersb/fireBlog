import "./App.css";
import React from "react";
import AppRouter from "./app-router/AppRouter";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </div>
  );
}

export default App;
