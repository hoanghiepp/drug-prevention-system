import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Consultation from "./pages/Consultation";
import Courses from "./pages/Courses";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Specialists from "./pages/Specialists";
import Survey from "./pages/Survey";
import Media from "./pages/Media";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="background"></div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/specialists" element={<Specialists />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/media" element={<Media />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
