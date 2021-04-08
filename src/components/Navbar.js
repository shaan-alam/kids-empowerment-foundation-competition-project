import { useState } from "react";
import LoginModal from "./LoginModal";
import Modal from "./Modal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const showNavbar = (e) => {
    e.preventDefault();

    setIsOpen(true);
  };

  const hideNavbar = (e) => {
    e.preventDefault();

    setIsOpen(false);
  };

  const showModal = (e) => {
    e.preventDefault();

    setModal(true);
  };

  const hideModal = (e) => {
    e.preventDefault();

    setModal(false);
  };

  return (
    <nav>
      <div className="container">
        <ul className={`${isOpen ? "visible" : ""}`}>
          <li>
            <a href="#!" className="bars" onClick={showNavbar}>
              <i className="fa fa-bars"></i>
            </a>
          </li>
          <li>
            <a href="#!" className="close" onClick={hideNavbar}>
              &times;
            </a>
          </li>
          <li>
            <a href="#!">Home</a>
          </li>
          <li>
            <a href="#!">Volunteer</a>
          </li>
          <li>
            <a href="#!">Services</a>
          </li>
          <li>
            <a href="#!">Contact</a>
          </li>
          <li>
            <a href="#!" className="primary__btn" onClick={showModal}>
              Login
            </a>
          </li>
        </ul>
        {modal && <LoginModal hideModal={hideModal} />}
      </div>
    </nav>
  );
};

export default Navbar;
