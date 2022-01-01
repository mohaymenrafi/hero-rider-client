import { useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  signInWithEmailAndPassword,
  deleteUser,
} from 'firebase/auth';
import axios from 'axios';
import authInit from '../firebase/firebase.init';

// Initializing firebase
/* eslint-disable react-hooks/exhaustive-deps  */
/* eslint-disable no-unused-vars  */
authInit();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();

  // post user to db
  const saveUser = (userInfo) => {
    axios
      .post('https://stark-depths-06330.herokuapp.com/users', userInfo)
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

  // delete firebase user as admin
  const removeUser = (id) => {
    getAuth()
      .deleteUser(id)
      .then(() => {
        console.log('delete successfully');
      })
      .catch((err) => console.warn(err.message));
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => console.error(error.message))
      .finally(() => setIsLoading(false));
  };

  // check admin status
  useEffect(() => {
    axios
      .get(`https://stark-depths-06330.herokuapp.com/users/${user.email}`)
      .then((res) => setAdmin(res.data.admin));
  }, [user?.email]);

  return {
    emailRegister,
    logOut,
    isLoading,
    user,
    emailLogIn,
    admin,
    removeUser,
  };
};

export default useFirebase;

// todo: admin, login
