import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import ButtonStyled from '../../styledComponents/ButtonStyled';

export default function Login() {
  const { googleSignIn } = useFirebase();
  return (
    <div className="bg-gray-300 px-4 py-32">
      <div className="container mx-auto">
        <h2>this is login page</h2>
        <ButtonStyled
          type="button"
          className="text-white"
          onClick={googleSignIn}
        >
          Login with google
        </ButtonStyled>
      </div>
    </div>
  );
}
