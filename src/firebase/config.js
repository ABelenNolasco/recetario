// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfxTEvta3y2gbjpl7SmjbjoB3i8sTYcT0",
  authDomain: "recetario-1a250.firebaseapp.com",
  projectId: "recetario-1a250",
  storageBucket: "recetario-1a250.firebasestorage.app",
  messagingSenderId: "166420355541",
  appId: "1:166420355541:web:48e20206e940ffb98b055c",
  measurementId: "G-VKHFZH789H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);