// src/pages/Courses.js
import React from "react";
import "./Courses.css";

export default function Courses() {
  return (
    <div className="page">
      <section className="courses" id="courses">
        {/* Tiêu đề màu đen */}
        <h2 className="section-title" style={{ color: "black" }}>
          Courses
        </h2>
        <p>
          Explore interactive courses and resources to raise awareness about
          drug prevention Discover engaging online courses, practical guides,
          and reliable resources designed to strengthen awareness of drug
          prevention. These interactive programs include real-life examples,
          simulations, and hands-on activities that make learning more impactful
          and memorable. In addition, you’ll gain access to a wide range of
          materials such as articles, videos, infographics, and toolkits to
          better understand the harmful effects of drugs and effective ways to
          prevent them. This is an important step toward building a healthier,
          safer community that stands strong against substance abuse.
        </p>

        <div className="services">
          {/* Course 1 */}
          <div className="service-card">
            <div className="icon">📘</div>
            <h3>Introduction to Drug Prevention</h3>
            <p>Learn the basics of drug awareness and prevention strategies.</p>
            <a
              href="https://tapchigiaoduc.edu.vn/article/86998/170/mot-so-bien-phap-giao-duc-ve-phong-chong-ma-tuy-cho-hoc-sinh-tren-dia-ban-tinh-dong-thap/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Learn More
            </a>
          </div>

          {/* Course 2 */}
          <div className="service-card">
            <div className="icon">🎓</div>
            <h3>Advanced Prevention Strategies</h3>
            <p>Deep dive into community-based prevention and education.</p>
            <a
              href="https://hvcsnd.edu.vn/khai-giang-cac-lop-boi-duong-cho-giang-vien-va-sinh-vien-chuyen-nganh-trinh-sat-phong-chong-toi-pham-ve-ma-tuy-12547"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View Details
            </a>
          </div>

          {/* Course 3 */}
          <div className="service-card">
            <div className="icon">🧑‍⚕️</div>
            <h3>Health & Wellness</h3>
            <p>Understand the impact of drugs on health and ways to recover.</p>
            <a
              href="https://www.who.int/health-topics/drugs-psychoactive#tab=tab_1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Start Course
            </a>
          </div>

          {/* Course 4 */}
          <div className="service-card">
            <div className="icon">👨‍👩‍👧</div>
            <h3>Family Support Programs</h3>
            <p>Learn how families can support prevention and rehabilitation.</p>
            <a
              href="https://www.youtube.com/watch?v=9ySPIwqLsiU"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Join Now
            </a>
          </div>

          {/* Course 5 */}
          <div className="service-card">
            <div className="icon">🏫</div>
            <h3>School Awareness</h3>
            <p>Educational programs for students to resist peer pressure.</p>
            <a
              href="https://www.youtube.com/watch?v=4xwINZjdkGo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Learn More
            </a>
          </div>

          {/* Course 6 */}
          <div className="service-card">
            <div className="icon">💼</div>
            <h3>Workplace Prevention</h3>
            <p>Policies and training to maintain a drug-free workplace.</p>
            <a
              href="https://www.youtube.com/watch?v=eSIeF_tXzOI"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Explore
            </a>
          </div>

          {/* Course 7 */}
          <div className="service-card">
            <div className="icon">🌍</div>
            <h3>Global Prevention Approaches</h3>
            <p>Learn international strategies and success stories.</p>
            <a
              href="https://tiengchuong.chinhphu.vn/quan-diem-ve-phong-chong-ma-tuy-cua-cac-nuoc-tren-the-gioi-11327304.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Discover
            </a>
          </div>

          {/* Course 8 */}
          <div className="service-card">
            <div className="icon">📊</div>
            <h3>Research & Data Analysis</h3>
            <p>Understand drug prevention research and evaluate outcomes.</p>
            <a
              href="https://www.google.com/search?q=drug+prevention+research"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Read More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
