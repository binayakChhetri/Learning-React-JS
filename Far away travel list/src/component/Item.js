import React from "react";

export default function Item({ itemObject, onDelItem, onToggleItem }) {
  const { description, quantity, packed } = itemObject;
  return (
    <li>
      <input
        type="checkbox"
        value={packed}
        onChange={(e) => {
          onToggleItem(itemObject.id);
        }}
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button
        onClick={() => {
          onDelItem(itemObject.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
