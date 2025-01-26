import React, { useState, useEffect } from "react";

const EditItemForm = ({ item, onSave, onCancel }) => {
  const [name, setName] = useState(item.name);
  const [category, setCategory] = useState(item.category);
  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    setName(item.name);
    setCategory(item.category);
    setQuantity(item.quantity);
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedItem = {
      ...item,
      name,
      category,
      quantity: parseInt(quantity),
    };
    onSave(updatedItem);
  };

  return (
    <div className="edit-form-container">
      <h2>Edit Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item Name"
          required
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          required
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity"
          required
        />
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default EditItemForm;