import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>
          © {new Date().getFullYear()} AL-Shawwa Restaurant. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
