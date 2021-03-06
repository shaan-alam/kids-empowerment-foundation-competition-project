import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { Context } from "../Context/GlobalState";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(Context);

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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/volunteers">Volunteer</Link>
          </li>
          <li>
            <Link to="books-donators">Books Donators</Link>
          </li>
          <li>
            <Link to="/contacts">Contact</Link>
          </li>
          {user?.uid != null ? (
            <li>
              <a href="#!" onClick={logout}>
                Logout
              </a>
            </li>
          ) : null}

          {user?.uid != null ? (
            <li>
              <Avatar src={user?.photoURL} alt={user?.displayName} />
            </li>
          ) : (
            <li>
              <Link to="/login" className="primary__btn">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
