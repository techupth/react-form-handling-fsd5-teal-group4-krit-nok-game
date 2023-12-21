import React, { useState } from "react";

function ProductForm() {
  const [productName, setProductName] = useState("");
  const [productImg, setProductImg] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submit productName: ${productName}, 
    productImg: ${productImg}, 
    productPrice: ${productPrice}, and 
    productDescription: ${productDescription} to server`);
  };
  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={productName}
            onChange={(event) => setProductName(event.target.value)}
            required
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={productImg}
            onChange={(event) => setProductImg(event.target.value)}
            required
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={productPrice}
            onChange={(event) => setProductPrice(event.target.value)}
            required
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={productDescription}
            onChange={(event) => setProductDescription(event.target.value)}
            required
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
