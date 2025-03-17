import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import Cart from "./Cart";
import "../styles/global.css";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const { totalItems } = useCart();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/bubbles/100/food.png"
              alt="food"
            />
            AL-Shawwa Restaurant
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/menu" className="nav-link">
                  Menu
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <button
                className="btn btn-outline-light position-relative px-3 py-2 cart-btn"
                onClick={() => setShowCart(true)}
              >
                <i className="fa-solid fa-cart-shopping fa-lg me-2"></i>
                <span className="d-none d-sm-inline">Cart</span>
                {totalItems > 0 && (
                  <span 
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{
                      animation: totalItems > 0 ? 'cartBadgePop 0.3s ease' : 'none'
                    }}
                  >
                    {totalItems}
                    <span className="visually-hidden">items in cart</span>
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Cart show={showCart} onHide={() => setShowCart(false)} />
    </>
  );
};

export default Navbar;
