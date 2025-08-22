import React, { useEffect, useState } from "react";
import { getCourses } from "../api/api";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCourses()
      .then((res) => setCourses(res.data || []))
      .catch((err) => {
        console.error(err);
        setCourses([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="page">
      <h2>Courses</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="list">
          {courses.length === 0 ? (
            <p>No courses found.</p>
          ) : (
            courses.map((c) => (
              <div key={c.id} className="card">
                <h4>{c.title || c.name}</h4>
                <p>{c.description}</p>
                <small>Audience: {c.audience || c.target || "All"}</small>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
