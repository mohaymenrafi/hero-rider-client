import React from 'react';
import styled from 'styled-components';
import banner from '../../../images/banner.jpg';
import { TitleStyled } from '../../../styledComponents/TitleStyled';

const BannerStyled = styled.div`
  background: url(${banner}) no-repeat center;
  background-size: cover;
  div {
    background: rgba(0, 0, 0, 0.5);
  }
`;

const Banner = () => (
  <BannerStyled className="text-center ">
    <div className="py-64">
      <TitleStyled className="text-white">
        Need to Travel? <br /> Get a lift or Find a free seat
      </TitleStyled>
    </div>
  </BannerStyled>
);

export default Banner;
