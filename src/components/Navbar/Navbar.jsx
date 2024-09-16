import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="main-navbar">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className={`pages-link ${isOpen ? "open" : ""}`}>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Product">Products</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>
        <div className="Navbar-Account">
          <button className="cart-button">
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
          <button className="account-button">
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
