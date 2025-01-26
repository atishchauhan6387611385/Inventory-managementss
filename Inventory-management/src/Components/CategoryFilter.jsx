import React from "react";

const CategoryFilter = ({ currentCategory, onCategoryChange }) => {
  const handleChange = (edit) => {
    onCategoryChange(edit.target.value); 
  };

  return (
    <div>
      <label>Filter by category Items:</label>
      <select value={currentCategory} onChange={handleChange}>
        <option value="">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Groceries">Groceries</option>
        <option value="Clothing">Clothing</option>
        <option value="Stationary">Stationary</option>
      </select>
    </div>
  );
};

export default CategoryFilter;