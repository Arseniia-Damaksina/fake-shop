import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./AddProductForm.css";
import getCookieValue from "../utils/getCookieValue.js";

const AddProductForm = () => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      category: category,
      name: name,
      price: price,
      img: img,
      user_id: getCookieValue("id")
    };

    const postAddProduct = async () => {
      try {
        const res = await axios.post("http://localhost:3000/add", data, {
          withCredentials: true,
        });
        if (res.status !== 201) {
          throw new Error("Error while creating a new user");
        } else {
          if (res.data.success) {
            setMessage(res.data.message);
            navigate("/")
          }
        }
      } catch (err) {
        setError(err.message);
      }
    };

    postAddProduct();
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleImg = (e) => {
    setImg(e.target.value);
  };

  return (
    <div className="form-component">
      <p>{error}</p>
      <p>{message}</p>
      <div className="form-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="category">Category: </label>
          <input
            type="text"
            name="category"
            id="category"
            value={category}
            onChange={(e) => handleCategory(e)}
          />
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => handleName(e)}
          />
          <label htmlFor="price">Price: </label>
          <input
            type="text"
            name="price"
            id="price"
            value={price}
            onChange={(e) => handlePrice(e)}
          />
          <label htmlFor="img">Image: </label>
          <input
            type="text"
            name="img"
            id="img"
            value={img}
            onChange={(e) => handleImg(e)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
