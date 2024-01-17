import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";

import "./Products.css";
import Loading from "./Loading.jsx";
import Product from "./Product.jsx";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/");
        console.log(res);
        if (res.status !== 200) {
          throw new Error(`Failed to fetch data with status: ${res.status}`);
        } else {
          setProducts(res.data.products);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/delete/${id}`, {
        withCredentials: true,
      });
      if (res.status === 200) {
        setProducts(products.filter((product) => product.id !== id));
      } else {
        throw new Error(`Failed to delete product with status: ${res.status}`);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="products">
      {loading && <Loading />}
      {error && <p className="error">{error}</p>}
      <div className="product-items">
        {products.length > 0 ? (
          products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onDelete={() => handleDelete(product.id)}
            />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

Products.propTypes = {};

export default Products;
