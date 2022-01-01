import React from 'react';
/* eslint-disable react/prop-types */
export default function UserOrderCard({ productName, amount, txId }) {
  return (
    <div className="border shadow px-6 py-12 rounded">
      <h2 className="text-lg">Product Name: {productName} </h2>
      <h2 className="text-lg">Product Name: {amount / 100}$ </h2>
      <h2 className="text-lg">Tx ID: {txId} </h2>
    </div>
  );
}
