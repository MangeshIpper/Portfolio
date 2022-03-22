import './App.css';
import React from "react";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';


function App() {
  return (
    <>
      <Router>
        <NotificationContainer />
          <Routes>
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route exact path="/" element={<Login/>} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
