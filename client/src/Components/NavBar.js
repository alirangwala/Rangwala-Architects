import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="profile"></div>
      <nav className="nav">
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
            <NavLink to="/projects" activeClassName="active">
              Projects
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
      </nav>
      <footer className="footer">
        <p>@2021 Ali Rangwala</p>
      </footer>
    </div>
  );
}

export default NavBar;
