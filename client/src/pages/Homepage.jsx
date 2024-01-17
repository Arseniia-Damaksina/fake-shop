import { useState } from "react";

import './Homepage.css';
import Products from "../components/Products.jsx";
import Navbar from "../components/Navbar.jsx";
import Header from "../components/Header.jsx";

const HomePage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedOut, setLoggedOut] = useState(true);

  return (
    <div className="main-container">
      <Navbar
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        loggedOut={loggedOut}
        setLoggedOut={setLoggedOut}
      />
       <Header title={"Fullstack Store"} />
      <Products
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        loggedOut={loggedOut}
        setLoggedOut={setLoggedOut}
      />
    </div>
  );
};

export default HomePage;
