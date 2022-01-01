import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useUsers() {
  const [users, setUser] = useState();
  useEffect(() => {
    axios
      .get(`https://stark-depths-06330.herokuapp.com/users/?name=rafi`)
      .then((res) => setUser(res.data));
  }, []);
  return [users, setUser];
}
