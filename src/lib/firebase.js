// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
// import { getstorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyD9dyUVVYcPyxoxlfJ748rMdui5tFEG3kI",
  authDomain: "fir-use-727c0.firebaseapp.com",
  projectId: "fir-use-727c0",
  storageBucket: "fir-use-727c0.appspot.com",
  messagingSenderId: "401510704607",
  appId: "1:401510704607:web:57d1be23c16b31265cd06a",
  measurementId: "G-MT59SGJZLH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// const storage = getstorage(app);


