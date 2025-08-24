import React, { useEffect, useState } from "react";
import { getStats } from "../api/api";
import "./Dashboard.css";

export default function Dashboard() {
  const [stats, setStats] = useState({
    users: "-",
    surveys: "-",
    appointments: "-",
  });

  useEffect(() => {
    getStats()
      .then(([uRes, sRes, aRes]) => {
        setStats({
          users: uRes?.data?.count ?? uRes?.data ?? "-",
          surveys: sRes?.data?.count ?? sRes?.data ?? "-",
          appointments: aRes?.data?.count ?? aRes?.data ?? "-",
        });
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="page">
      <h2>Dashboard</h2>
      <div className="grid-3">
        <div className="card">
          <div className="stat">{stats.users}</div>
          <div>Users</div>
        </div>
        <div className="card">
          <div className="stat">{stats.surveys}</div>
          <div>Surveys</div>
        </div>
        <div className="card">
          <div className="stat">{stats.appointments}</div>
          <div>Appointments</div>
        </div>
      </div>
    </div>
  );
}
