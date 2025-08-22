import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="background"></div>
      {/* Header */}
      <header className="header">
        <h1 className="logo">Drug Prevention Support</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#courses">Courses</a>
          <a href="#consulting">Consulting</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="hero"
        id="home"
        style={{
          backgroundImage: "url('')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h2>Protecting Communities, Saving Lives</h2>
        <p>
          A digital platform to prevent drug use through education, awareness,
          and professional support.
        </p>
        <div className="btn-group">
          <button className="btn primary">Register</button>
          <button className="btn secondary">Login</button>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2 className="section-title">Our Services</h2>
        <div className="services">
          {/* Education Card */}
          <div className="service-card">
            <div className="icon">📘</div>
            <h3>Education</h3>
            <p>Interactive courses and resources to raise awareness.</p>
            <a
              href="https://www.google.com/search?q=drug+prevention+courses"
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
              href="https://www.google.com/search?q=Drug+Prevention&sca_esv=98553a785e0448de&rlz=1C1ONGR_enVN1126VN1126&udm=7&biw=1536&bih=826&sxsrf=AE3TifOJo15oH_ZvgDwDO79O6urWN8H8yw%3A1755891238714&ei=JsaoaJesK8yP4-EP8c2l6QU&ved=0ahUKEwiX17DMlJ-PAxXMxzgGHfFmKV0Q4dUDCBA&uact=5&oq=Drug+Prevention&gs_lp=EhZnd3Mtd2l6LW1vZGVsZXNzLXZpZGVvIg9EcnVnIFByZXZlbnRpb24yBBAjGCcyBBAjGCcyBxAAGIAEGBMyBxAAGIAEGBMyBxAAGIAEGBMyBxAAGIAEGBMyBxAAGIAEGBMyBxAAGIAEGBMyBxAAGIAEGBMyBxAAGIAEGBNI8QhQugNYugNwAXgAkAEAmAFcoAFcqgEBMbgBA8gBAPgBAfgBApgCAqACYqgCA8ICBxAjGCcY6gKYAwKSBwEyoAeyCLIHATG4B1_CBwMwLjLIBwU&sclient=gws-wiz-modeless-video#fpstate=ive&vld=cid:9b154c85,vid:LunoLU3XFKc,st:0"
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
      <section className="consulting" id="consulting">
        <h2 className="section-title">Consulting Services</h2>
        <p>
          Connect with healthcare specialists, counselors, and organizations for
          drug prevention and recovery support.
        </p>
        <button className="btn primary">Book a Session</button>
      </section>

      {/* Dashboard Section */}
      <section className="dashboard" id="dashboard">
        <h2 className="section-titlee">Your Dashboard</h2>
        <p>
          Track your learning progress, surveys, and risk assessments to stay on
          the right path.
        </p>
        <button className="btn secondary">View Dashboard</button>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2 className="section-title">Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit" className="btn primary">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Drug Prevention System · Community Health Project</p>
      </footer>
    </div>
  );
}

export default App;
