import React, { useState } from "react";
import { registerUser } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      setMsg("Registered successfully. Please login.");
      setTimeout(() => navigate("/login"), 1200);
    } catch (err) {
      console.error(err);
      setMsg("Register failed");
    }
  };

  return (
    <div className="page">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="stack small-card">
        <input
          placeholder="Full name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="btn" type="submit">
          Register
        </button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}
