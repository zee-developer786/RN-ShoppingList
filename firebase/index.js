import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpoUtQvfehjW5YC4BNsrgCgICBtNz-KIg",
  authDomain: "shopping-list-app-8f3ec.firebaseapp.com",
  projectId: "shopping-list-app-8f3ec",
  storageBucket: "shopping-list-app-8f3ec.appspot.com",
  messagingSenderId: "90522766779",
  appId: "1:90522766779:web:f94032779b6eedaa23089e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db, collection, addDoc, getFirestore, getDocs };
