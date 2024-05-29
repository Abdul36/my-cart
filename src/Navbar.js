// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

export default function Navbar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const { totalItems } = useCart(); // Access the total items in the cart

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand text-primary" to="/">
            RapidMart
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/cart"
                >
                  Cart ({totalItems})
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
