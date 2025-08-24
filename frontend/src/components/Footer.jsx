import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Drug Prevention System · Community Health Project</p>
      <div className="social-links">
        <a
          href="https://www.facebook.com/groups/2350929881718510/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/480px-Facebook_logo_36x36.svg.png"
            alt="Facebook"
            width="30"
          />{" "}
          Facebook
        </a>

        <a
          href="https://www.tiktok.com/@theanh28entertainment"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.pixabay.com/photo/2021/06/15/12/28/tiktok-6338431_1280.png"
            alt="TikTok"
            width="30"
          />{" "}
          TikTok
        </a>

        <a href="tel:+84987654321">
          <img
            src="https://png.pngtree.com/png-clipart/20230131/ourmid/pngtree-phone-call-icon-logo-symbol-vector-design-transparent-png-image_6575461.png"
            alt="Phone"
            width="30"
          />{" "}
          +84 987 654 321
        </a>
      </div>
    </footer>
  );
}
