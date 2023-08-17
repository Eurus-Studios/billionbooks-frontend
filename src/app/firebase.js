// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKeY3I0w931D1rp0JztQ26Dkh5wMIj4UU",
  authDomain: "billionbooks-auth.firebaseapp.com",
  projectId: "billionbooks-auth",
  storageBucket: "billionbooks-auth.appspot.com",
  messagingSenderId: "236779336157",
  appId: "1:236779336157:web:6e4a2f2f5259d23bd70634",
  measurementId: "G-J2HEXCK606"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
