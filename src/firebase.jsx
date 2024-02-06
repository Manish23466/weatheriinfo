// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC9p2_W4_Ynxd8pMm7SX-NF8dWLdm2wQM8",
  authDomain: "weatherinfoaut.firebaseapp.com",
  projectId: "weatherinfoaut",
  storageBucket: "weatherinfoaut.appspot.com",
  messagingSenderId: "156601388043",
  appId: "1:156601388043:web:9c7d9a5595230bbd8a4b0e",
  measurementId: "G-PPH4K04BC9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth};