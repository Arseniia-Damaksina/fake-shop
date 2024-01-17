import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/Homepage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import AddProductPage from "./pages/AddProductPage.jsx";
import LogoutPage from "./pages/LogoutPage.jsx";
import EditProductPage from "./pages/EditProductPage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/add-product" element={<AddProductPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/edit/:id" element={<EditProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;
