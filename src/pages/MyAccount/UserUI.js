import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import UserOrderCard from './UserOrderCard';

export default function UserUI() {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    axios
      .get(`https://stark-depths-06330.herokuapp.com/orders?email=${user?.email}`)
      .then((res) => {
        console.log(res.data);
        setMyOrders(res.data);
      });
  });
  return (
    <div className="max-w-4xl mx-auto p-16">
      <h2 className="font-mont text-3xl font-semibold text-center">
        My Orders
      </h2>
      <div className="mt-12 grid grid-cols-1 grid-cols-2">
        {myOrders.map((order) => (
          <UserOrderCard {...order} key={order._id} />
        ))}
      </div>
    </div>
  );
}
