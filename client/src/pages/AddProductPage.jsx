import AddProductForm from "../components/AddProductForm.jsx";
import Header from '../components/Header.jsx';
import Navbar from '../components/Navbar.jsx';

const LoginPage = () => {
  return (
    <div className="main-container">
      <Navbar />
      <Header title={"Add Product"} />
      <AddProductForm />
    </div>
  );
};

export default LoginPage;