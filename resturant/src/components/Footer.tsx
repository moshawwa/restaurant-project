import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* Restaurant Info */}
          <div className="col-lg-4 mb-4">
            <h5 className="mb-3">AL-Shawwa Restaurant</h5>
            <p className="mb-2">
              <i className="fas fa-map-marker-alt me-2"></i>
              alrashed Street, Gaza
            </p>
            <p className="mb-2">
              <i className="fas fa-phone me-2"></i>
              +972597802445
            </p>
            <p className="mb-2">
              <i className="fas fa-envelope me-2"></i>
              shawwaresto@gmail.com
            </p>
            <div className="mt-3 social-links">
              <a 
                href="https://www.facebook.com/alshawwarestaurant" 
                className="text-white me-3 social-icon" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ transition: 'color 0.3s ease' }}
                onMouseEnter={e => e.currentTarget.style.color = '#4267B2'}
                onMouseLeave={e => e.currentTarget.style.color = 'white'}
              >
                <i className="fab fa-facebook-f fa-lg"></i>
              </a>
              <a 
                href="https://www.instagram.com/alshawwarestaurant" 
                className="text-white me-3 social-icon" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ transition: 'color 0.3s ease' }}
                onMouseEnter={e => e.currentTarget.style.color = '#E1306C'}
                onMouseLeave={e => e.currentTarget.style.color = 'white'}
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a 
                href="https://twitter.com/alshawwaresto" 
                className="text-white me-3 social-icon" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ transition: 'color 0.3s ease' }}
                onMouseEnter={e => e.currentTarget.style.color = '#1DA1F2'}
                onMouseLeave={e => e.currentTarget.style.color = 'white'}
              >
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a 
                href="https://www.tiktok.com/@alshawwarestaurant" 
                className="text-white social-icon" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ transition: 'color 0.3s ease' }}
                onMouseEnter={e => e.currentTarget.style.color = '#69C9D0'}
                onMouseLeave={e => e.currentTarget.style.color = 'white'}
              >
                <i className="fab fa-tiktok fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="col-lg-4 mb-4">
            <h5 className="mb-3">Opening Hours</h5>
            <p className="mb-2">
              <i className="fas fa-clock me-2"></i>
              Monday - Friday
            </p>
            <p className="mb-3">11:00 AM - 10:00 PM</p>
            <p className="mb-2">
              <i className="fas fa-clock me-2"></i>
              Saturday - Sunday
            </p>
            <p>10:00 AM - 11:00 PM</p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none hover-link">
                  <i className="fas fa-chevron-right me-2"></i>Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/menu" className="text-white text-decoration-none hover-link">
                  <i className="fas fa-chevron-right me-2"></i>Menu
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-white text-decoration-none hover-link">
                  <i className="fas fa-chevron-right me-2"></i>About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-white text-decoration-none hover-link">
                  <i className="fas fa-chevron-right me-2"></i>Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-4">
          <div className="col-12">
            <hr className="bg-light" />
            <p className="text-center mb-0">
              © {new Date().getFullYear()} AL-Shawwa Restaurant. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <style>
        {`
          .hover-link:hover {
            color: #dc3545 !important;
            transform: translateX(5px);
            transition: all 0.3s ease;
          }
          .social-icon:hover {
            transform: translateY(-3px);
            transition: transform 0.3s ease;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
