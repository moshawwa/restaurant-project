import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>
          © {new Date().getFullYear()} Restaurant Name. All rights reserved.
        </p>
        <p>
          <a href="/contact" className="text-white text-decoration-none">
            Contact Us
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
