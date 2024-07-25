import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  // get user data from local storage
  const user = JSON.parse(localStorage.getItem("user"));

  //Logout function
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <header className=" fixed-top bg-white sticky">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand text-danger fw-bold" href="/">
              <img
                src="../assets/images/logo.png"
                style={{
                  width: "50px",
                  marginLeft: "-100px",
                }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#facility">
                    Facility
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <form className="d-flex gap-2" role="search">
              {user ? (
                <div class="dropdown">
                  <button
                    class="btn btn-dark dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {user.UserName}
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <Link class="dropdown-item" to="/homepage">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/emergency">
                        Emergency Contacts
                      </Link>
                    </li>
                    <li>
                      <button onClick={handleLogout} class="dropdown-item">
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <>
                  <button
                    className="btn btn-outline-danger"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </>
              )}
            </form>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
