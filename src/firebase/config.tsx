// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJSL_5Cu9P1hbCUqWjH7-CqD_x2_TLK8Y",
  authDomain: "loongtoomchickenrice.firebaseapp.com",
  projectId: "loongtoomchickenrice",
  storageBucket: "loongtoomchickenrice.appspot.com",
  messagingSenderId: "892026505824",
  appId: "1:892026505824:web:cf86b1a54cb1c3ec13d105",
  measurementId: "G-645Q6PZT24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);