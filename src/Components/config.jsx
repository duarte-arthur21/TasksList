import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDojduk544_fI4yhLoQY4HJ_wRRaNvlMYI",
  authDomain: "tasks-list-fda0b.firebaseapp.com",
  projectId: "tasks-list-fda0b",
  storageBucket: "tasks-list-fda0b.appspot.com",
  messagingSenderId: "924132627272",
  appId: "1:924132627272:web:5cffa1812a7c85d9f5997d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app);
