import axios from 'axios';
import { useEffect, useState } from 'react';

const useCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get('https://stark-depths-06330.herokuapp.com/courses')
      .then((res) => setCourses(res.data));
  }, []);
  return [courses];
};
export default useCourses;
