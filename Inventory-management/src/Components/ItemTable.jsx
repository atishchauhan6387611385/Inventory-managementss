
import React, { useState } from "react";
import ItemRow from "./ItemRow";

const ItemTable = ({ items, updateItem, deleteItem, editItem }) => {
  const [Quantity, setQuantity] = useState(false);

  const handleSort = () => {
    setQuantity(!Quantity);
  };

  const sortedItems = Quantity
    ? [...items].sort((a, b) => a.quantity - b.quantity)
    : items;

  return (
    <div>
      <button onClick={handleSort}>
        Sort by Quantity {Quantity ? "(Descending)" : "(Ascending)"}
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedItems.map((item) => (
            <ItemRow
              key={item.id}
              item={item}
              updateItem={updateItem}
              deleteItem={deleteItem}
              editItem ={editItem}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemTable;