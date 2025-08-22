import React, { useEffect, useState } from "react";
import { getConsultants } from "../api/api";

export default function Specialists() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getConsultants()
      .then((res) => setList(res.data || []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="page">
      <h2>Specialists / Consultants</h2>
      <div className="list">
        {list.length === 0 ? (
          <p>No specialists found.</p>
        ) : (
          list.map((s) => (
            <div key={s.id} className="card">
              <h4>{s.name}</h4>
              <p>{s.specialization}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
