// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmL7Woa6FhOvVMobhSpUna5CWMZfQXNtA",
  authDomain: "june7-d5056.firebaseapp.com",
  projectId: "june7-d5056",
  storageBucket: "june7-d5056.firebasestorage.app",
  messagingSenderId: "510361742719",
  appId: "1:510361742719:web:f1a7388857a471ac93fe4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
