import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RBACProvider } from "./context/RBACContext";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login";

function App() {
  return (
    <RBACProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </RBACProvider>
  );
}

export default App;
