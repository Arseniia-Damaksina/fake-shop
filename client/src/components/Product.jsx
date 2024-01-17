import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = ({ product, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit/${product.id}`);
  };

  return (
    <div className="product">
      <img src={product.img} alt={product.name} />
      <div className="content">
        <div className="categories">
          <p>Category:</p>
          <p>Model:</p>
          <p>Price:</p>
        </div>
        <div className="productValues">
          <p>{product.category}</p>
          <p>{product.name}</p>
          <p>${product.price}</p>
        </div>
        <div className="iconsDiv">
          <FontAwesomeIcon
            icon={faPenToSquare}
            style={{ color: "#ffffff", fontSize: "20px", margin: "10px 5px" }}
            onClick={handleEdit}
          />
          <FontAwesomeIcon
            icon={faTrash}
            style={{ color: "#ffffff", fontSize: "20px", margin: "10px 5px" }}
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }),
};

export default Product;
