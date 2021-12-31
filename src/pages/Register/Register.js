import React from 'react';

import { TitleStyled } from '../../styledComponents/TitleStyled';
import DrivingLearner from './DrivingLearner';
import RiderForm from './RiderForm';

export default function Register() {
  // console.log(watch());
  return (
    <div className="py-32 max-w-screen-lg mx-auto">
      <TitleStyled className="text-center">Register Here</TitleStyled>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <RiderForm />
        <DrivingLearner />
      </div>
    </div>
  );
}
