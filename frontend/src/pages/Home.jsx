// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero"
        id="home"
        style={{
          backgroundImage: "url('/assets/ảnh ma túy.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          padding: "120px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "3rem", fontWeight: "bold", color: "white" }}>
          Protecting Communities, Saving Lives
        </h2>
        <p style={{ fontSize: "1.3rem", color: "#ffffffff" }}>
          A digital platform to prevent drug use through education, awareness,
          and professional support.
        </p>
        <div className="btn-group" style={{ marginTop: "20px" }}>
          <Link
            to="/register"
            className="btn primary"
            style={{ margin: "0 10px" }}
          >
            Register
          </Link>
          <Link
            to="/login"
            className="btn secondary"
            style={{ margin: "0 10px" }}
          >
            Login
          </Link>
        </div>
      </section>
      {/* Introduction + Video */}
      <section
        className="intro"
        style={{ textAlign: "center", padding: "30px 10px" }}
      >
        <h1
          style={{ fontSize: "1.3rem", color: "#ffffffff" }}
          className="main-title"
        >
          Drug Prevention Awareness
        </h1>

        <p style={{ fontSize: "1.3rem", color: "#ffffffff" }}>
          Empowering communities with knowledge, resources, and tools to prevent
          drug abuse and promote healthy lifestyles.
        </p>

        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/a_frdvO7f44?si=OqPfmvLZnBAxe4Ux"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <a
          href="/courses"
          className="btn"
          style={{ marginTop: "20px", display: "inline-block" }}
        >
          Explore Courses
        </a>
      </section>

      {/* Features */}
      <section
        className="features"
        style={{ padding: "60px 20px", textAlign: "center" }}
      >
        <h2 className="section-title">Our Services</h2>
        <div
          className="services"
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* Education Card */}
          <div className="service-card">
            <div className="icon">📘</div>
            <h3>Education</h3>
            <p>Interactive courses and resources to raise awareness.</p>
            <a
              href="https://tapchigiaoduc.edu.vn/article/86998/170/mot-so-bien-phap-giao-duc-ve-phong-chong-ma-tuy-cho-hoc-sinh-tren-dia-ban-tinh-dong-thap/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Learn More
            </a>
          </div>

          {/* Consultation Card */}
          <div className="service-card">
            <div className="icon">🧑‍⚕️</div>
            <h3>Consultation</h3>
            <p>
              Book an appointment with an expert to receive prevention guidance.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeoWjFdXQtQ7NzWJJ5uUv6V-EDc5NBp3Do1bMm5sH785TuHqw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Book Now
            </a>
          </div>

          {/* Courses Card */}
          <div className="service-card">
            <div className="icon">🎓</div>
            <h3>Courses</h3>
            <p>Interactive courses and resources to raise awareness.</p>
            <a
              href="https://hvcsnd.edu.vn/khai-giang-cac-lop-boi-duong-cho-giang-vien-va-sinh-vien-chuyen-nganh-trinh-sat-phong-chong-toi-pham-ve-ma-tuy-12547"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View Details
            </a>
          </div>

          {/* Dashboard Card */}
          <div className="service-card">
            <div className="icon">📊</div>
            <h3>Dashboard</h3>
            <p>Track surveys, progress, and risk assessment results.</p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeoWjFdXQtQ7NzWJJ5uUv6V-EDc5NBp3Do1bMm5sH785TuHqw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Access Now
            </a>
          </div>
        </div>
      </section>

      {/* Consulting Section */}
      <section
        className="consulting"
        id="consulting"
        style={{ textAlign: "center", padding: "60px 20px" }}
      >
        <h2 className="section-title">Consulting Services</h2>
        <p>
          Connect with healthcare specialists, counselors, and organizations for
          drug prevention and recovery support.
        </p>
        <button className="btn primary">Book a Session</button>
      </section>

      {/* Dashboard Section */}
      <section
        className="dashboard"
        id="dashboard"
        style={{ textAlign: "center", padding: "60px 20px" }}
      >
        <h2 className="section-titlee">Your Dashboard</h2>
        <p>
          Track your learning progress, surveys, and risk assessments to stay on
          the right path.
        </p>
        <button className="btn secondary">View Dashboard</button>
      </section>

      {/* Contact Section */}
      <section
        className="contact"
        id="contact"
        style={{ padding: "60px 20px", textAlign: "center" }}
      >
        <h2 className="section-titlee">Contact Us</h2>
        <form
          className="contact-form"
          style={{
            maxWidth: "500px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit" className="btn primary">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
