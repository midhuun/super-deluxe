// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBvU650Mi6v5kePxAu8TbLhipaybS-aJ4A",
  authDomain: "super-deluxe-arun.firebaseapp.com",
  projectId: "super-deluxe-arun",
  storageBucket: "super-deluxe-arun.firebasestorage.app",
  messagingSenderId: "34031725861",
  appId: "1:34031725861:web:31ab45b69b256acfc17ecc",
  measurementId: "G-J93FH5M19B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
