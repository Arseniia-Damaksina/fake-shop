import './Navbar.css';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const Navbar = (loggedIn, setLoggedIn, loggedOut, setLoggedOut) => {
  return (
    <div className='navbar'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add-product">Add Product</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;