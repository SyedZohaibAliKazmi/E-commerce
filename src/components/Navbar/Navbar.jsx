import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <div>
      {/* 1 div  */}
      <div className="main-navbar">
        {/* 2 div  */}
        <div className="logo">
          <h1>Logo</h1>
        </div>
        {/* 3 div  */}
        <div className="pages-link">
            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Product">Products</Link></li>
                <li><Link to="About">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </div>

        {/* 4 div  */}
        {/* <div className="Navbar-Cart">
        <button className="cart-button"><FontAwesomeIcon icon={faCartShopping}/></button>
        </div> */}


        {/* 5 div  */}
        <div className="Navbar-Account">
        <button className="cart-button"><FontAwesomeIcon icon={faCartShopping}/></button>
          <button  className="account-button"><FontAwesomeIcon icon={faUser}/> </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
