// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDduC_5Ami2jSEkmlr53e1RLK4NPIJijSY",
  authDomain: "final3-5a87a.firebaseapp.com",
  projectId: "final3-5a87a",
  storageBucket: "final3-5a87a.appspot.com",
  messagingSenderId: "575838790289",
  appId: "1:575838790289:web:fe03c2553112b75a4b1530"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);