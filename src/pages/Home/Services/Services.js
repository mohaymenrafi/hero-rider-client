import React from 'react';
import { TitleStyled } from '../../../styledComponents/TitleStyled';

export default function Services() {
  return (
    <div className="py-24 container mx-auto">
      <TitleStyled className="text-center">Our Services</TitleStyled>
      <div className="grid grid-cols-1 grid-cols-2 my-32">
        <div className="mx-auto">
          <span className="border p-16 text-3xl font-mont font-semibold text-green-500 hover:shadow">
            Ride Sharing
          </span>
        </div>
        <div className="mx-auto">
          <span className="border p-16 text-3xl font-mont font-semibold text-green-500 hover:shadow">
            Driving Lesson
          </span>
        </div>
      </div>
    </div>
  );
}
