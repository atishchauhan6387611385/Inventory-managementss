
import React, { useState } from "react";
import AddItemForm from "./components/AddItemForm";
import ItemTable from "./Components/ItemTable";
import CategoryFilter from "./Components/CategoryFilter";
import ItemRow from "./Components/ItemRow";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", category: "Electronics", quantity: 15 },
    { id: 2, name: "Item 2", category: "Groceries", quantity: 29 },
    { id: 3, name: "Item 3", category: "Clothing", quantity: 36 },
    { id: 4, name: "Item 4", category: "Staionery", quantity: 33 },
  ]);
  
  const [Category, setCategory] = useState("");
  const [editing, setEditing] = useState(null);  


  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };
  const updateItem = (id, updatedItem) => {
    setItems(items.map((item) => (item.id === id ? { ...item, ...updatedItem } : item)));
  };


  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  
  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  const filterItems = () => {
    return items.filter((item) => !Category || item.category === Category);
  };

  const handleEditItem = (item) => {
    setEditing(item);  
  };

  
  const handleSaveEdit = (updatedItem) => {
    updateItem(updatedItem.id, updatedItem);
    setEditing(null); 
  };

  return (
    <div className="App">
      <h1>Inventory <span>Management</span></h1>

      <AddItemForm addItem={addItem} />
      <CategoryFilter 
        currentCategory={Category} 
        onCategoryChange={handleCategoryChange} 
      />
      <ItemTable 
        items={filterItems()}
        updateItem={updateItem}
        deleteItem={deleteItem}
        onEdit={handleEditItem}  
      />

      
      {editing && (
        <EditItemForm 
          item={editing} 
          onSave={handleSaveEdit} 
          onCancel={() => setEditing(null)}  
        />
      )}
    </div>
  );
};

export default App;