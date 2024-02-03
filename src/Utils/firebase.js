// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkzkTutAZJNtzW93B5lQqmgDXigMPHu3w",
  authDomain: "netflixgpt-ca599.firebaseapp.com",
  projectId: "netflixgpt-ca599",
  storageBucket: "netflixgpt-ca599.appspot.com",
  messagingSenderId: "579496042816",
  appId: "1:579496042816:web:4a61f786f42eec9cc8daa5",
  measurementId: "G-05J50H2TJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();