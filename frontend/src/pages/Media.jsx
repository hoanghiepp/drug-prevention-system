import React from "react";

export default function Media() {
  // Nếu backend có endpoint media dùng axios tương tự
  return (
    <div className="page">
      <h2>Media & Resources</h2>
      <p>
        List of educational articles, videos and downloadable materials will
        appear here.
      </p>
      <ul>
        <li>Article: Understanding drugs</li>
        <li>Video: How to refuse peer pressure</li>
        <li>Guide: Parent's handbook</li>
      </ul>
    </div>
  );
}
