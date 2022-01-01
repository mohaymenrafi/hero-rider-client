import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCourses from '../../../hooks/useCourses';
import ButtonStyled from '../../../styledComponents/ButtonStyled';
import { TitleStyled } from '../../../styledComponents/TitleStyled';

export default function Packages() {
  const [courses] = useCourses();

  return (
    <div className="max-w-4xl mx-auto px-4 py-32">
      <TitleStyled className="text-center">
        Learn Driving From <br /> Our Experts
      </TitleStyled>
      <div className="grid grid-cols-1 grid-cols-2 gap-6 mt-8">
        {courses.map((course) => (
          <div className="shadow-lg px-4 py-8 rounded text-center">
            <h2 className="text-2xl my-4 font-mont font-semibold">
              {course?.name}
            </h2>
            <h3 className="text-xl my-4 font-medium">
              Duratoin: {course?.duration}
            </h3>
            <h3 className="text-xl my-4 text-green-600 font-medium">
              Price: ${course?.price}
            </h3>
            <Link to={`/purchase/${course._id}`}>
              <ButtonStyled type="button">Book Now</ButtonStyled>
            </Link>
          </div>
        ))}
        {/* <div className="shadow-lg px-4 py-8 rounded text-center">
          <h2 className="text-2xl my-4 font-mont font-semibold">
            Car Driving Lesson
          </h2>
          <h3 className="text-xl my-4 font-medium">Duratoin: 3 Months</h3>
          <h3 className="text-xl my-4 text-green-600 font-medium">
            Price: $400
          </h3>
          <ButtonStyled type="button">Book Now</ButtonStyled>
        </div> */}
      </div>
    </div>
  );
}
