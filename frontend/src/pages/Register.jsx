import React, { useState } from "react";
import { registerUser } from "../api/api";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setMsg("");
    try {
      await registerUser(form);
      setMsg("Registered successfully. Please login.");
      setTimeout(() => navigate("/login"), 1000);
    } catch (e) {
      setMsg("Register failed");
    }
  }

  return (
    <div className="page auth">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="stack small-card">
        <input
          placeholder="Full name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
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
        <button className="btn primary" type="submit">
          Register
        </button>
      </form>

      {msg && <p>{msg}</p>}
      <p style={{ marginTop: 12 }}>
        Đã có tài khoản? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
