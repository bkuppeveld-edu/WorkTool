// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCMqyZ0TwsTuWMHJMh3KAO-Vb8D6OAGY7A",
  authDomain: "lesdemo.firebaseapp.com",
  databaseURL: "https://lesdemo.firebaseio.com",
  projectId: "lesdemo",
  storageBucket: "lesdemo.appspot.com",
  messagingSenderId: "220526745969",
  appId: "1:220526745969:web:c20ab67d544193ee23bed0",
  measurementId: "G-NR13Y366JF"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);



export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();