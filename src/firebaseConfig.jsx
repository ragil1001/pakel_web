import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCH_MBMZMAoh_I9ZiTDHVhVTFVWyFlEE9g",
  authDomain: "pakeladmin.firebaseapp.com",
  projectId: "pakeladmin",
  storageBucket: "pakeladmin.firebasestorage.app",
  messagingSenderId: "858281360810",
  appId: "1:858281360810:web:082b75aafe328b8c75bfd3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
