import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhh-6QiF1jlZ5TXHVmtEuVfESjJJ_ljv8",
  authDomain: "sakr-group.firebaseapp.com",
  projectId: "sakr-group",
  storageBucket: "sakr-group.firebasestorage.app",
  messagingSenderId: "800574334150",
  appId: "1:800574334150:web:9713c3b831f4998b26a3c7",
  measurementId: "G-9QGFJFM48V",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs };
