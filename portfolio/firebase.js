// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAZsywzsDhluPwfLV3y2t-yNJl6Z5lsxU",
  authDomain: "mohit-s-portfolio-232a5.firebaseapp.com",
  projectId: "mohit-s-portfolio-232a5",
  storageBucket: "mohit-s-portfolio-232a5.firebasestorage.app",
  messagingSenderId: "313570103425",
  appId: "1:313570103425:web:89f8bf06e417f3e1193d80",
  measurementId: "G-P613VRT76K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);