import "./EditProductForm.css";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

import getCookieValue from "../utils/getCookieValue.js";

const EditProductForm = () => {
  // const getProductToUpdate = async (id) => {
  //   try {
  //     const res = await axios.get("http://localhost:3000/");
  //     console.log(res);
  //     if (res.status !== 200) {
  //       throw new Error(`Failed to fetch data with status: ${res.status}`);
  //     } else {
  //       const productToUpdate = res.data.products.filter((product) => product.id === id);
  //       console.log(productToUpdate);
  //       return productToUpdate;
  //     }
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

  const id = useParams().id;
  
  // const productToUpdate = getProductToUpdate(id);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      category: category,
      name: name,
      price: price,
      img: img,
      // user_id: getCookieValue("id")
    };

    const updateAddProduct = async (id) => {
      try {
        const res = await axios.put(
          `http://localhost:3000/update/${id}`,
          data,
          {
            withCredentials: true,
          }
        );
        if (res.status !== 200) {
          throw new Error("Error while updating a product");
        } else {
          if (res.data.success) {
            setCategory("");
            setName("");
            setPrice("");
            setImg("");
            setMessage(res.data.message);
          }
        }
      } catch (err) {
        setError(err.message);
      }
    };

    updateAddProduct(id);
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

export default EditProductForm;
