// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMDHa6-Rl6e4q0nru6S0i9K8ksRS8-7o0",
  authDomain: "library-management-69478.firebaseapp.com",
  projectId: "library-management-69478",
  storageBucket: "library-management-69478.appspot.com",
  messagingSenderId: "23977437256",
  appId: "1:23977437256:web:1583015e50234541ca107d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
