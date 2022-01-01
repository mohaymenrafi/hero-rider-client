import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';
import Loader from '../Message/Loader';

const stripePromise = loadStripe('pk_test_ZcXFgWxX9DA3B3TRrZ37fRfV00jFRXgjc9');

export default function Payment() {
  const { id } = useParams();
  const [course, setCourse] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/courses/${id}`)
      .then((res) => setCourse(res.data));
  }, []);
  //   console.log(course);
  if (course.length === 0) return <Loader />;
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h2 className="font-mont text-3xl font-semibold mb-12">
        Pay ${course?.price} for {course?.name}
      </h2>
      {course?.price && (
        <Elements stripe={stripePromise}>
          <PaymentForm {...course} />
        </Elements>
      )}
    </div>
  );
}
