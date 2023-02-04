import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import logo from "../Images/logo.png";
const Navbar = (props) => {
  const [Access, SetAccess] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("res"));
    if (data == null) {
      SetAccess(false);
    } else {
      SetAccess(true);
    }
  }, []);
  const [nav, Setnav] = useState(false);
  const [status, Setstatus] = useState("");
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      Setnav(true);
    } else {
      Setnav(false);
    }
  };
  const changeClass = () => {
    Setstatus("active");
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <a href="#" className="logo">
        <img src={logo} alt="" />
      </a>
      <input type="checkbox" name="" className="menu-btn" id="menu-btn" />
      <label className="menu-lbl" htmlFor="menu-btn">
        <span className="nav-icon">
          <ul className="menu">
            <li>
              <a className="active" href="#">
                Home
              </a>
            </li>
            <li>
              <Link
                to="test2435"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                href="#"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                href="#"
              >
                Contact
              </Link>
            </li>
            {Access ? (
              <li>
                <a onClick={logout} href="/">
                  Logout
                </a>
              </li>
            ) : (
              <li>
                <a href="/login">Login</a>
              </li>
            )}
            {Access ? (
              <li>
                <a href="/profile">Profile</a>
              </li>
            ) : (
              <li>
                <a href="/register">Register</a>
              </li>
            )}
          </ul>
        </span>
      </label>
    </nav>
  );
};

export default Navbar;
