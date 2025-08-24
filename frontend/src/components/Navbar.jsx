import React from "react";

export default function Navbar() {
  return (
    <header className="header">
      <h1 className="logo">Drug Prevention Support</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/courses">Courses</a>
        <a href="/consultation">Consulting</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}
