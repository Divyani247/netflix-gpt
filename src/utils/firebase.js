// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,  } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkOSfGHgdk1StNQdw8om0lelT4-XcJu4Y",
  authDomain: "netflixgpt-6aa31.firebaseapp.com",
  projectId: "netflixgpt-6aa31",
  storageBucket: "netflixgpt-6aa31.appspot.com",
  messagingSenderId: "1018304047109",
  appId: "1:1018304047109:web:87fc01249ba9fcfc1e546c",
  measurementId: "G-QQE9RN4WM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();