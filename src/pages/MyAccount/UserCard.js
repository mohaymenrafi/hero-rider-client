import React from 'react';
/* eslint-disable react/prop-types */
export default function UserCard({ fullName, email, userRole }) {
  return (
    <div className="shadow p-8">
      <h2>name:{fullName}</h2>
    </div>
  );
}
