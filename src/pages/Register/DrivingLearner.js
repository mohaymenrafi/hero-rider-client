import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const FormStyled = styled.form`
  display: flex;
  flex-wrap: wrap;
  label {
    font-size: 1rem;
    margin-bottom: 5px;
  }
  input,
  select {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-bottom: 15px;
  }
`;

export default function DrivingLearner() {
  // router history
  const history = useHistory();
  // firebase import
  const { emailRegister } = useAuth();
  // password match
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is required')
      .min(4, 'Password length should be at least 4 characters'),
    passwordConfirm: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password')], 'Passwords needs to match'),
  });
  const validationOpt = { resolver: yupResolver(formSchema) };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(validationOpt);
  const onSubmit = (data) => {
    console.log(data);
    emailRegister(data, history);
  };
  return (
    <div>
      <h3 className="text-2xl font-medium">Register as a Driving Learner</h3>
      <hr className="border-gray-200 w-8/12 my-2" />
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <h3 className="block w-full my-3 font-medium text-lg">
          Personal Information
        </h3>
        <label htmlFor="fullName">Full Name</label>
        <input type="text" placeholder="Full Name" {...register('fullName')} />
        <label htmlFor="email">Your Email</label>
        <input
          required
          type="email"
          placeholder="Email"
          {...register('email')}
        />
        <label htmlFor="age">Your Age</label>
        <input type="number" placeholder="Age" {...register('age')} />
        <label htmlFor="phone">Phone Number</label>
        <input
          type="number"
          required
          placeholder="Phone"
          {...register('phone')}
        />
        <label htmlFor="address">Your Address</label>
        <input type="text" placeholder="Address" {...register('address')} />
        <label htmlFor="nidImage">NID Picture</label>
        <input type="text" placeholder="Image URL" {...register('nidImage')} />
        <label htmlFor="profileImage">Profile Picture</label>
        <input
          required
          type="text"
          placeholder="Image URL"
          {...register('profileImage')}
        />
        <label htmlFor="vehicleType">Vehicle Type: </label>
        <select
          type="dropdown"
          placeholder="Vehicle Type"
          {...register('vehicleType')}
        >
          <option value="car">Car</option>
          <option value="bike">Bike</option>
        </select>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          {...register('password')}
          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback w-full text-red-600">
          {errors.password?.message}
        </div>
        <label htmlFor="passwordConfirm">Re-enter Password</label>
        <input
          type="password"
          placeholder="Re-enter Password"
          {...register('passwordConfirm')}
          className={`form-control ${
            errors.passwordConfirm ? 'is-invalid' : ''
          }`}
        />
        <div className="invalid-feedback w-full text-red-600">
          {errors.passwordConfirm?.message}
        </div>
        <input type="hidden" defaultValue="Learner" {...register('userRole')} />
        <input type="submit" onClick={emailRegister} />
      </FormStyled>
    </div>
  );
}
