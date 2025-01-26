
import React, { useState } from "react";

const AddItemForm = ({ addItem }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (edit) => {
    edit.preventDefault();
    const newItem = {
      id: Math.random(),
      name,
      category,
      quantity: parseInt(quantity),
    };
    addItem(newItem);
    setName("");
    setCategory("");
    setQuantity(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(edit) => setName(edit.target.value)}
        placeholder="Item Name"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(edit) => setCategory(edit.target.value)}
        placeholder="Category"
        required
      />
      <input
        type="number"
        value={quantity}
        onChange={(edit) => setQuantity(edit.target.value)}
        placeholder="Quantity"
        required
      />
      <button type="submit">Add news Items</button>
    </form>
  );
};

export default AddItemForm;