import EditProductForm from "../components/EditProductForm.jsx";
import Header from '../components/Header.jsx';
import Navbar from '../components/Navbar.jsx';

const EditProductPage = () => {
  return (
    <div className="main-container">
      <Navbar />
      <Header title={"Edit Product"} />
      <EditProductForm />
    </div>
  );
};

export default EditProductPage;
