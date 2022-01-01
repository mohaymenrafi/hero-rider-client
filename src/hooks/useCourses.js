import axios from 'axios';
import { useEffect, useState } from 'react';

const useCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5000/courses')
      .then((res) => setCourses(res.data));
  }, []);
  return [courses];
};
export default useCourses;
