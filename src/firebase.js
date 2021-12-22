import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYc3o3F5_lvzW9IHUTRFJzadYqGhs6xsA",
  authDomain: "loyalty-f8c43.firebaseapp.com",
  projectId: "loyalty-f8c43",
  storageBucket: "loyalty-f8c43.appspot.com",
  messagingSenderId: "321237674654",
  appId: "1:321237674654:web:1f8f9367ef0087c26c298f",
  measurementId: "G-9HY3EFEYZH"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();

