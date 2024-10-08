import { initializeApp } from "firebase/app";
import { getAuth } from "@react-native-firebase/auth";
import { getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyC4icacC5Lm84QHoXsFB6v6uFV97Bvqn08",
  authDomain: "react-auth-bad55.firebaseapp.com",
  projectId: "react-auth-bad55",
  storageBucket: "react-auth-bad55.appspot.com",
  messagingSenderId: "900591220118",
  appId: "1:900591220118:web:1900fb437a7a36a89599b7"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);