// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY || process.env.FIREBASE_APIKEY,
  authDomain: "connecthive-1.firebaseapp.com",
  projectId: "connecthive-1",
  storageBucket: "connecthive-1.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: "G-YV9GPDE1FT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Only initialize analytics on the client side
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const db = getFirestore(app);

export { db };
