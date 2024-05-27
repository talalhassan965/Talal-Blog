// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "talal-blog-b2211.firebaseapp.com",
  projectId: "talal-blog-b2211",
  storageBucket: "talal-blog-b2211.appspot.com",
  messagingSenderId: "362698345012",
  appId: "1:362698345012:web:64b14ba6e4abcebca4d861"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);