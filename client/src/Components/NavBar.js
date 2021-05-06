import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile"></div>
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
