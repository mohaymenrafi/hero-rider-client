import React from 'react';
import useAuth from '../../hooks/useAuth';
import { TitleStyled } from '../../styledComponents/TitleStyled';
import AdminUI from './AdminUI';
import UserUI from './UserUI';

export default function MyAccount() {
  const { admin } = useAuth();
  // if (isLoading) return <h2>loading ...</h2>;
  return (
    <>
      <div className="bg-gray-800 py-16">
        <TitleStyled className="text-white text-center">My Account</TitleStyled>
      </div>
      {admin ? <AdminUI /> : <UserUI />}
    </>
  );
}
