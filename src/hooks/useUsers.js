import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useUsers() {
  const [users, setUser] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/?name=rafi`)
      .then((res) => setUser(res.data));
  }, []);
  return [users, setUser];
}
