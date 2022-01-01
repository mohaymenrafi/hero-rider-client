import React from 'react';
/* eslint-disable react/prop-types */
export default function SuccesMessage({ success }) {
  return (
    <div>
      <h2 className="text-lg font-medium text-green-400">{success}</h2>
    </div>
  );
}
