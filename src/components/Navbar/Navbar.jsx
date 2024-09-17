import { useState,useRef,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gsap } from "gsap";
import { faUser, faCartShopping, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const menuRef = useRef(null);
  // const linkRefs = useRef([]); // To store references for each link
  const [isOpen, setIsOpen] = useState(false);
  const cartitem = 0

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.from(menuRef.current, {
        duration: 0.5,
        ease: "power3.out",
        x: "100%",
      })}else {
        gsap.to(menuRef.current, {
          duration: 0.5,
          ease: "power3.in",
        });
      }
    }, [isOpen]);
  return (
    <div>
      <div className="main-navbar">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div  ref={menuRef} className={`pages-link ${isOpen ? "open" : ""}`}>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Product">Products</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>
        <div className="Navbar-Account">
          <button className="cart-button">
            <FontAwesomeIcon icon={faCartShopping} /> {cartitem > 0 && <span className="cart-badge">{cartitem}</span>}
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
