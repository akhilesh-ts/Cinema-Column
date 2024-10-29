// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY2y_cvGad9_K2TSvzjjTc3un2YXNVjzo",
  authDomain: "cinema-column-b7bc5.firebaseapp.com",
  projectId: "cinema-column-b7bc5",
  storageBucket: "cinema-column-b7bc5.appspot.com",
  messagingSenderId: "351118741498",
  appId: "1:351118741498:web:0ddd071e56203211775e43",
  measurementId: "G-X2MG6QGTMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth=getAuth(app)