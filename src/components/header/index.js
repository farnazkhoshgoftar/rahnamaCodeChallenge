import { NavLink } from "react-router-dom";

import "./header.css";
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <h2>Welcome</h2>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={{ color: "rgb(255, 119, 8)" }}
                  className="nav-link"
                  to={"/log-in"}
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={{ color: "rgb(255, 119, 8)" }}
                  className="nav-link"
                  to={"/sign-up"}
                >
                  Sign up
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
