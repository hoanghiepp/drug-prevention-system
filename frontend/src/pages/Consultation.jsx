import React, { useEffect, useState } from "react";
import { getConsultants, bookAppointment } from "../api/api";
import "./Consultation.css";

export default function Consultation() {
  const [consultants, setConsultants] = useState([]);
  const [form, setForm] = useState({
    fullname: "",
    age: "",
    province: "",
    consultant_id: "",
    category: "",
    time: "",
    note: "",
  });
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getConsultants()
      .then((res) => setConsultants(res.data || []))
      .catch((err) => console.error(err));
  }, []);

  const handleBook = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...form };
      const res = await bookAppointment(payload);
      setMsg("Booked successfully");
    } catch (err) {
      console.error(err);
      setMsg("Booking failed");
    }
  };

  return (
    <div className="page">
      <h2>Book Consultation</h2>

      <div className="card">
        <form onSubmit={handleBook} className="stack">
          {/* Họ tên */}
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={form.fullname}
            onChange={(e) => setForm({ ...form, fullname: e.target.value })}
            required
          />

          {/* Tuổi */}
          <label>Age</label>
          <input
            type="number"
            placeholder="Enter your age"
            value={form.age}
            onChange={(e) => setForm({ ...form, age: e.target.value })}
            required
          />

          {/* Tỉnh/Thành phố */}
          <label>Province / City</label>
          <input
            type="text"
            placeholder="Enter your province or city"
            value={form.province}
            onChange={(e) => setForm({ ...form, province: e.target.value })}
            required
          />

          {/* Chọn tư vấn viên */}
          <label>Consultant</label>
          <select
            value={form.consultant_id}
            onChange={(e) =>
              setForm({ ...form, consultant_id: e.target.value })
            }
            required
          >
            <option value="">--Choose--</option>
            {consultants.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name} ({c.specialization})
              </option>
            ))}
          </select>

          {/* Thêm mục tư vấn */}
          <label>Consultation Type</label>
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            required
          >
            <option value="">--Select--</option>
            <option value="health">Health</option>
            <option value="psychology">Psychology</option>
            <option value="education">Education</option>
            <option value="career">Career</option>
            <option value="other">Other</option>
          </select>

          {/* Chọn thời gian */}
          <label>Date & Time</label>
          <input
            type="datetime-local"
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            required
          />

          {/* Ghi chú */}
          <label>Note</label>
          <textarea
            placeholder="Enter any additional information..."
            value={form.note}
            onChange={(e) => setForm({ ...form, note: e.target.value })}
          />

          <button className="btn" type="submit">
            Book
          </button>
        </form>
        {msg && <p>{msg}</p>}
      </div>
    </div>
  );
}
