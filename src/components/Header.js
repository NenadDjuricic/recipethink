import React from "react";
import SearchBar from "./SearchBar";
import {Link} from 'react-router-dom'
const Header = ({ getRecipe, showSearch }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light ">
      <div className="container ">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarToggler"
        >
          {showSearch === "yes" ? (
            <React.Fragment>
              
              <SearchBar getRecipe={getRecipe} />
              <ul className="navbar-nav mb-2 mb-lg-0-auto ">
                <li className="nav-item dropdown">
                  <i
                    className="bi bi-person nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></i>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                    style={{ padding: "10px", paddingBottom: "15px" }}
                  >
                    <form
                      className="form-horizontal"
                      method="post"
                      acceptCharset="UTF-8"
                      autoComplete="off"
                    >
                      <input
                        className="form-control login"
                        type="text"
                        name="username"
                        placeholder="Username.."
                        autoComplete="off"
                      />
                      <br />
                      <input
                        className="form-control login"
                        type="password"
                        name="password"
                        placeholder="Password.."
                        autoComplete="off"
                      />
                      <br />
                      <input
                        className="btn btn-primary"
                        type="submit"
                        name="submit"
                        value="Login"
                      />
                    </form>
                  </div>
                </li>

                <li className="nav-item">
                <Link to="/#aboutUs"  className="nav-link">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                <Link to="/#contact"  className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <ul className="navbar-nav mb-2 mb-lg-0-auto d-inline-flex" style={{marginLeft:'auto'}}>
              <li className="nav-item">
                  <Link to='/' className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <i
                    className="bi bi-person nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></i>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                    style={{ padding: "10px", paddingBottom: "15px" }}
                  >
                    <form
                      className="form-horizontal"
                      method="post"
                      acceptCharset="UTF-8"
                      autoComplete="off"
                    >
                      <input
                        className="form-control login"
                        type="text"
                        name="username"
                        placeholder="Username.."
                        autoComplete="off"
                      />
                      <br />
                      <input
                        className="form-control login"
                        type="password"
                        name="password"
                        placeholder="Password.."
                        autoComplete="off"
                      />
                      <br />
                      <input
                        className="btn btn-primary"
                        type="submit"
                        name="submit"
                        value="Login"
                      />
                    </form>
                  </div>
                </li>

                <li className="nav-item">
                <Link to="/#aboutUs"  className="nav-link">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                <Link to="/#contact"  className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
