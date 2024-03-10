import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingLists from "./PackingLists";
import Stats from "./Stats";
/* const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Pillow", quantity: 3, packed: true },
]; */
export default function App() {
  const [items, setItem] = useState([]);

  // This will handle the action after the user add item to the list.
  function handleAddItem(item) {
    setItem((items) => [...items, item]);
  }
  // This function will delete the item of the user's choice after clicking the "X" button
  function handleDelItem(id) {
    console.log(id);
    setItem((items) => items.filter((item) => item.id !== id));
  }
  // This function will toggle the packed property
  function handleToggleItem(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  // This function will clear the item list
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want of delete all items?"
    );
    if (confirmed) setItem([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingLists
        items={items}
        onDelItem={handleDelItem}
        onToggleItem={handleToggleItem}
        onClearItem={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
