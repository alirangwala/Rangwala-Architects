import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/rangwalalogo.png";
function NavBar() {
  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img src={logo} alt="RANGWALAARCHITECTS" />
          <div className="icons">
            <Link className="icon-holder">
              <FontAwesomeIcon icon={faCoffee} className="icon gh" />
            </Link>
          </div>
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio" activeClassName="active">
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/testimonials" activeClassName="active">
              Testimonials
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
        <footer className="footer">
          <p>@2021 Ali Rangwala</p>
        </footer>
      </nav>
    </div>
  );
}

export default NavBar;
