import React from 'react';
import styled from 'styled-components';

const LoaderStyled = styled.div`
  .loader {
    border-top-color: #3498db;
    -webkit-animation: spinner 1.5s linear infinite;
    animation: spinner 1.5s linear infinite;
  }

  @-webkit-keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Loader() {
  return (
    <LoaderStyled className="mx-auto loader ease-linear rounded-full border-8 border-t-8 border-blue-500 h-20 w-20" />
  );
}
