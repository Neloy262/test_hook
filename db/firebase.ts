// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMUPDR1I4lHWGCRjSiUVrNDR-LcdWyojs",
  authDomain: "in-sight-mono.firebaseapp.com",
  projectId: "in-sight-mono",
  storageBucket: "in-sight-mono.appspot.com",
  messagingSenderId: "481104394544",
  appId: "1:481104394544:web:9a5c03cd8c9007b07870f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
