// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASfQxj-8kAmREh2Le7g0qYwNhqW9WqONw",
  authDomain: "blog1-b1af5.firebaseapp.com",
  projectId: "blog1-b1af5",
  storageBucket: "blog1-b1af5.appspot.com",
  messagingSenderId: "655671628307",
  appId: "1:655671628307:web:339a9c80aa7e3f5c44a5e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider;
export const db = getFirestore(app);