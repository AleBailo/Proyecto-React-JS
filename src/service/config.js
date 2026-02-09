import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWPGyhlrLI2lI6t_CnW3VfAljAsD8U9X8",
  authDomain: "proyecto-react-js-28d83.firebaseapp.com",
  projectId: "proyecto-react-js-28d83",
  storageBucket: "proyecto-react-js-28d83.firebasestorage.app",
  messagingSenderId: "7799427485",
  appId: "1:7799427485:web:8201da5ad3a8bf051ddf74",
  measurementId: "G-M3PT8CKXE1"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

