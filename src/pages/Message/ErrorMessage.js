import React from 'react';
/* eslint-disable react/prop-types */
export default function ErrorMessage({ err }) {
  return (
    <div>
      <h2 className="text-lg font-medium text-red-400">{err}</h2>
    </div>
  );
}
