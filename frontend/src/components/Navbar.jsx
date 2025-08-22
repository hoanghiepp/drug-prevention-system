import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/" className="brand">
          Drug Prevention
        </Link>
        <Link to="/courses">Courses</Link>
        <Link to="/survey">Survey</Link>
        <Link to="/consultation">Consultation</Link>
        <Link to="/specialists">Specialists</Link>
        <Link to="/media">Media</Link>
      </div>
      <div className="nav-right">
        {!token ? (
          <>
            <Link to="/login" className="btn">
              Login
            </Link>
            <Link to="/register" className="btn btn-outline">
              Register
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="btn">
              Dashboard
            </Link>
            <button className="btn btn-logout" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
