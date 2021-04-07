import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showNavbar = (e) => {
    e.preventDefault();

    setIsOpen(true);
  };

  const hideNavbar = (e) => {
    e.preventDefault();

    setIsOpen(false);
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
            <a href="#!">About</a>
          </li>
          <li>
            <a href="#!">Services</a>
          </li>
          <li>
            <a href="#!">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
