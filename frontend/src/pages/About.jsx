import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      <h1 className="about-title">About Our System</h1>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          The <b>Consultation & Drug Prevention Booking System</b> is designed
          to provide a safe online environment where users can connect with
          professional consultants in various fields:
          <ul>
            <li>Health and psychological counseling</li>
            <li>Education and career guidance</li>
            <li>Drug prevention and rehabilitation support</li>
          </ul>
          We aim to contribute to building a healthier community, reducing the
          negative impact of drugs, and offering timely support to those in
          need.
        </p>
      </div>

      <div className="about-section">
        <h2>Key Features</h2>
        <ul>
          <li>📅 Quick and easy online consultation booking</li>
          <li>👨‍⚕️ Connect with trusted and experienced professionals</li>
          <li>🔒 Full privacy and data security</li>
          <li>🌍 Accessible anytime, anywhere through an online platform</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Vision & Values</h2>
        <p>
          We believe that providing the right information and timely support can
          change lives. Our system is committed to:
        </p>
        <ul>
          <li>
            Ensuring <b>trust</b> in every consultation session
          </li>
          <li>
            Maintaining <b>confidentiality</b> and <b>privacy</b> for users
          </li>
          <li>
            Building a <b>safe and healthy</b> community
          </li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Our Team</h2>
        <p>
          This system was developed by a group of students and professionals in
          the fields of <b>Software Engineering</b> and <b>Psychology</b>.
          Combining <b>technology expertise</b> with{" "}
          <b>real-world experience</b>, we are dedicated to delivering the most
          effective platform to support users in need.
        </p>
      </div>

      <div className="about-section">
        <h2>Contact Us</h2>
        <p>
          📧 Email: support@consultation-system.com <br />
          ☎️ Hotline: +84 1900 123 456 <br />
          🌍 Website: www.consultation-system.com
        </p>
      </div>
    </div>
  );
}
