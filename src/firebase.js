import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyAUn6DLrZr3LpUma3FXGYqTuOfmo0OCW8o",
  authDomain: "dummy-ca67c.firebaseapp.com",
  databaseURL: "https://dummy-ca67c-default-rtdb.firebaseio.com",
  projectId: "dummy-ca67c",
  storageBucket: "dummy-ca67c.appspot.com",
  messagingSenderId: "904569761484",
  appId: "1:904569761484:web:85b2a425212c8392145c69",
  measurementId: "G-9CC45GJEE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);



