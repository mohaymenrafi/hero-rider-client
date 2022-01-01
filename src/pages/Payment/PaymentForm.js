import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import ErrorMessage from '../Message/ErrorMessage';
import Loader from '../Message/Loader';
import SuccesMessage from '../Message/SuccesMessage';
import './PaymentForm.css';
/* eslint-disable no-useless-return */
/* eslint-disable react/prop-types */
export default function PaymentForm({ price, name }) {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    axios
      .post('https://stark-depths-06330.herokuapp.com/create-payment-intent', {
        price,
      })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (card == null) return;

    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      setError(error.message);
      setSuccess('');
    } else {
      setError('');
      console.log('[PaymentMethod]', paymentMethod);
    }
    // payment intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });
    if (intentError) {
      setError(intentError.message);
      setSuccess('');
    } else {
      setError('');
      setSuccess('Your payment processed successfully');
      console.log(paymentIntent);
      setProcessing(false);
      // save order to database
      const orderInfo = {
        email: user.email,
        name: user.displayName,
        productName: name,
        amount: paymentIntent.amount,
        txId: paymentIntent.id,
        currency: paymentIntent.currency,
        time: paymentIntent.created,
      };
      axios
        .post('https://stark-depths-06330.herokuapp.com/orders', orderInfo)
        .then((res) => {
          console.log(res.data);
          alert('You have successfully placed your order.');
        });
    }
  };
  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button
        type="submit"
        disabled={!stripe}
        className="text-xl bg-green-300 hover:bg-green-600 hover:text-white px-8 py-2 rounded"
      >
        Pay
      </button>
      {error && <ErrorMessage err={error} />}
      {success && <SuccesMessage success={success} />}
      {/* <Loader /> */}
    </form>
  );
}
