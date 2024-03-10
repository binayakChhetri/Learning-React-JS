import React from "react";

export default function Stats({ items }) {
  if (!items.length)
    return (
      <>
        <footer className="stats">
          <em>Start adding come items to your packing list</em>
        </footer>
      </>
    );

  let noOfItems = items.length;
  let noOfPackedItems = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((noOfPackedItems / noOfItems) * 100);
  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You got everything! Ready to go ✈️🌎"
          : `💼 You have ${noOfItems} items on your list, and you already packed ${noOfPackedItems} (${packedPercentage})%.`}
      </em>
    </footer>
  );
}
