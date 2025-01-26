
import React from "react";

const ItemRow = ({ item, updateItem, deleteItem, onEdit }) => {
  const handleIncreaseQuantity = () => {
    updateItem(item.id, { quantity: item.quantity + 1 });
  };

  const handleDelete = () => {
    deleteItem(item.id);
  };
  const handleEdit =()=>{
    onEdit(item)
  }

  return (
    <tr
      style={{
        backgroundColor: item.quantity < 10 ? "red" : "white",
      }}
    >
      <td>{item.name}</td>
      <td>{item.category}</td>
      <td>{item.quantity}</td>
      <td>
        <button onClick={handleIncreaseQuantity}>Increase Quantity</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleEdit}>Edit</button>
      </td>
    </tr>
  );
};

export default ItemRow;