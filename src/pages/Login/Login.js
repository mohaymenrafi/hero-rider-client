import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import FormStyled from '../../styledComponents/FormStyled';

export default function Login() {
  const { emailLogIn } = useAuth();
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const history = useHistory();
  const onSubmit = (data) => {
    console.log(data);
    emailLogIn(data.email, data.password, location, history);
  };
  return (
    <div className="bg-gray-300 px-4 py-32">
      <div className="max-w-sm mx-auto shadow rounded p-8">
        <h2 className="font-mont text-3xl font-semibold mb-6">Log In</h2>
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Email" {...register('email')} />
          <input
            type="password"
            placeholder="Password"
            {...register('password')}
          />
          <input type="submit" value="Login" />
        </FormStyled>
      </div>
    </div>
  );
}
