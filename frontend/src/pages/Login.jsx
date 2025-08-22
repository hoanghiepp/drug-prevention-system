import React, { useState } from "react";
import { loginUser } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      const res = await loginUser(form);
      // backend có thể trả token key khác, kiểm tra console nếu không work
      const token =
        res.data.access_token || res.data.token || res.data?.data?.token;
      if (token) {
        localStorage.setItem("token", token);
        navigate("/dashboard");
      } else {
        setErr("Không nhận được token từ server");
      }
    } catch (error) {
      console.error(error);
      setErr("Đăng nhập thất bại");
    }
  };

  return (
    <div className="page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="stack small-card">
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
          Login
        </button>
        {err && <p className="error">{err}</p>}
      </form>
    </div>
  );
}
