import Link from "next/link";

import React, { useEffect, useState } from "react";

import Modal from "react-bootstrap/Modal";

import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/Redux/Reducers/authSlice";
import SignupForm from "./SignupForm";
import { toast } from "react-toastify";


const Header = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    // var test=localStorage.getItem("token")
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showSignup, setShowSignup] = useState(false);

  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);

  const handleLogOut = () => {
    dispatch(logout());
    toast.success("Logout Successfully");
  };
  return (
    <header className="main_nav">
      <div className="container">
        <nav className="navbar nav-new navbar-expand-lg navbar-light">
          <Link className="navbar-brand" href="/">
            <img src="../../assets/logo.png" alt="Na" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  Entertainment
                </a>
                <div className="dropdown-menu">
                  <Link href="/shows" className="dropdown-item">
                    SHOWS <span className="sr-only">(current)</span>
                  </Link>
                  <Link className="dropdown-item" href="/recaps">
                    RECAPS
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  Productions
                </a>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" href="/schedule">
                    Schedule<span className="sr-only">(current)</span>
                  </Link>
                  <a className="dropdown-item" href="/RSVP">
                    RSVP<span className="sr-only">(current)</span>
                  </a>
                  {/* {token && user.role != '3' && <Link className="dropdown-item" to="/joined-productions">Joined Productions<span className="sr-only">(current)</span></Link>} */}
                </div>
              </li>
              {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                Events
                                </a>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item"to="/events">View All Events<span className="sr-only">(current)</span></Link>
                                    <Link className="dropdown-item" to="/joint-events">View Joint Events</Link>
                                </div>
                            </li> */}

              <li className="nav-item">
                <Link className="nav-link" href="/news">
                  Community Voice
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/network">
                  Network
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/creative">
                  Creative Compound
                </Link>
              </li>
              <li className="nav-item">
                {token ? (
                  <a className="nav-link" onClick={handleLogOut}>
                    Logout
                  </a>
                ) : (
                  <a
                    className="nav-link"
                    onClick={handleShow}
                    data-toggle="modal"
                    data-target="#loginForm"
                  >
                    Login
                  </a>
                )}
              </li>

              {!token && (
                <li className="nav-item sign_upNav">
                  <a
                    className="nav-link"
                    onClick={handleShowSignup}
                    data-toggle="modal"
                    href="#"
                    data-target="#signupForm"
                  >
                    Sign Up
                  </a>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>CANNABIS CAPITOL ACCOUNT LOGIN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={showSignup} onHide={handleCloseSignup}>
        <Modal.Header>
          <Modal.Title>
            WELCOME TO CANNABIS CAPITOL Create your account
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignupForm />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </header>
  );
};

export default Header;
