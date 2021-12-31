import { useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import axios from 'axios';
import authInit from '../firebase/firebase.init';

// Initializing firebase
authInit();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // const [admin, setAdmin] = useState(false);

  const auth = getAuth();

  // post user to db
  const saveUser = (userInfo) => {
    axios
      .post('http://localhost:5000/users', userInfo)
      .then((res) => console.log(res.data));
  };

  const emailRegister = (userInfo, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
      .then((userCredential) => {
        const newUser = {
          email: userInfo.email,
          displayName: userInfo.fullName,
        };
        console.log(userCredential);
        setUser(newUser);
        // saving to db
        saveUser(userInfo);

        // updating name to firebase
        updateProfile(auth.currentUser, {
          displayName: userInfo.fullName,
        })
          .then(() => {})
          .catch((err) => console.warn(err.message));
        history.push('/my-account');
      })
      .catch((error) => console.warn(error.message))
      .finally(() => setIsLoading(false));
  };

  // here login user code will go.
  const emailLogIn = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password, location)
      .then((userCredential) => {
        const uri = location?.state?.from || '/my-account';
        history.push(uri);
      })
      .catch((err) => console.warn(err.message))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (successUser) => {
      if (successUser) {
        setUser(successUser);
        // console.log(successUser);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => console.error(error.message))
      .finally(() => setIsLoading(false));
  };

  return {
    emailRegister,
    logOut,
    isLoading,
    user,
    emailLogIn,
  };
};

export default useFirebase;

// todo: admin, login
