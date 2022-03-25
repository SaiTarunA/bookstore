// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOC6S79T2306Y9PD1ACGppa2mUhKxQi4s",
  authDomain: "bookstore-2d188.firebaseapp.com",
  projectId: "bookstore-2d188",
  storageBucket: "bookstore-2d188.appspot.com",
  messagingSenderId: "585857743225",
  appId: "1:585857743225:web:ce133ce2aae424ff5dd7a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);