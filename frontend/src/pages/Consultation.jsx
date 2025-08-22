import React, { useEffect, useState } from "react";
import { getConsultants, bookAppointment } from "../api/api";

export default function Consultation() {
  const [consultants, setConsultants] = useState([]);
  const [form, setForm] = useState({ consultant_id: "", time: "", note: "" });
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
          <label>Consultant</label>
          <select
            value={form.consultant_id}
            onChange={(e) =>
              setForm({ ...form, consultant_id: e.target.value })
            }
          >
            <option value="">--Choose--</option>
            {consultants.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name} ({c.specialization})
              </option>
            ))}
          </select>

          <label>Date & Time</label>
          <input
            type="datetime-local"
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
          />

          <label>Note</label>
          <textarea
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
