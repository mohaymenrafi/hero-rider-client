import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase.config';

// Initialize Firebase Function
const authInit = () => {
  initializeApp(firebaseConfig);
};

export default authInit;
